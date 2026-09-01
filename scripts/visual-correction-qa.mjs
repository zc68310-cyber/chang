import { chromium } from 'playwright-core'
import { mkdirSync, writeFileSync } from 'node:fs'

const baseUrl = process.env.PORTFOLIO_URL ?? 'http://127.0.0.1:4173'
const outputDir = 'tmp/visual-qa'
mkdirSync(outputDir, { recursive: true })

const browser = await chromium.launch({
  executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  headless: true,
})
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 })
const consoleErrors = []
page.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text())
})

await page.goto(baseUrl, { waitUntil: 'networkidle' })
await page.emulateMedia({ reducedMotion: 'no-preference' })
await page.waitForTimeout(1100)

const hero = await page.evaluate(() => {
  const image = document.querySelector('.avatar-visual')
  const stage = document.querySelector('.avatar-stage')
  const title = document.querySelector('#hero-title')
  const identity = document.querySelector('.hero-identity')
  const role = document.querySelector('.hero-role-line')
  if (!(image instanceof HTMLElement) || !(stage instanceof HTMLElement) || !(title instanceof HTMLElement)) return null
  const imageStyle = getComputedStyle(image)
  const stageStyle = getComputedStyle(stage)
  const imageRect = image.getBoundingClientRect()
  const titleRect = title.getBoundingClientRect()
  return {
    image: { width: imageRect.width, height: imageRect.height, background: imageStyle.backgroundColor, borderRadius: imageStyle.borderRadius, boxShadow: imageStyle.boxShadow, clipPath: imageStyle.clipPath, padding: imageStyle.padding },
    stage: { width: stage.getBoundingClientRect().width, background: stageStyle.backgroundColor, borderRadius: stageStyle.borderRadius, boxShadow: stageStyle.boxShadow, clipPath: stageStyle.clipPath, padding: stageStyle.padding },
    title: { text: title.textContent?.trim(), width: titleRect.width, fontSize: getComputedStyle(title).fontSize, opacity: getComputedStyle(title).opacity },
    identity: identity ? { text: identity.textContent?.trim(), fontSize: getComputedStyle(identity).fontSize } : null,
    role: role?.getAttribute('aria-label') ?? role?.textContent?.trim() ?? null,
  }
})
const avatarTransformBefore = await page.locator('.avatar-stage').evaluate((node) => getComputedStyle(node).transform)
await page.mouse.move(1380, 420)
await page.waitForTimeout(260)
const avatarTransformAfter = await page.locator('.avatar-stage').evaluate((node) => getComputedStyle(node).transform)
hero.avatarTracking = {
  before: avatarTransformBefore,
  after: avatarTransformAfter,
  moved: avatarTransformBefore !== avatarTransformAfter,
}
await page.mouse.move(720, 450)
await page.waitForTimeout(220)
await page.screenshot({ path: `${outputDir}/01-hero.png` })

await page.locator('#about').scrollIntoViewIfNeeded()
await page.waitForTimeout(1000)
const about = await page.evaluate(() => {
  const copy = document.querySelector('.about-copy')
  const decorations = [...document.querySelectorAll('.about-decor')]
  return {
    fontSize: copy ? getComputedStyle(copy).fontSize : null,
    lineHeight: copy ? getComputedStyle(copy).lineHeight : null,
    maxWidth: copy ? getComputedStyle(copy).maxWidth : null,
    decorationCount: decorations.length,
    decorationsVisible: decorations.map((node) => {
      const rect = node.getBoundingClientRect()
      const image = node
      return rect.width > 0 && rect.height > 0 && getComputedStyle(node).opacity !== '0' && image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0
    }),
  }
})
await page.screenshot({ path: `${outputDir}/02-about.png` })

await page.locator('#experience').scrollIntoViewIfNeeded()
await page.waitForTimeout(500)
const experience = await page.evaluate(() => [...document.querySelectorAll('.experience-logo')].map((node) => ({
  text: node.textContent?.trim(),
  width: node.getBoundingClientRect().width,
  height: node.getBoundingClientRect().height,
  imageLoaded: node.querySelector('img') instanceof HTMLImageElement ? Boolean(node.querySelector('img')?.complete && node.querySelector('img')?.naturalWidth) : false,
})))
await page.screenshot({ path: `${outputDir}/03-experience.png` })

const experienceGallery = page.locator('.experience-gallery')
await experienceGallery.scrollIntoViewIfNeeded()
await page.waitForTimeout(900)
const galleryBefore = await experienceGallery.locator('.experience-gallery-track').evaluate((node) => node.scrollLeft)
await experienceGallery.getByRole('button', { name: /下一组/ }).evaluate((node) => node.click())
await page.waitForTimeout(500)
const galleryAfter = await experienceGallery.locator('.experience-gallery-track').evaluate((node) => node.scrollLeft)
const gallery = {
  itemCount: await experienceGallery.locator('.experience-gallery-item').count(),
  before: galleryBefore,
  after: galleryAfter,
  moved: galleryAfter > galleryBefore,
}
await page.screenshot({ path: `${outputDir}/03b-experience-gallery.png` })

const workTop = await page.locator('.work-marquee-section').evaluate((node) => node.getBoundingClientRect().top + window.scrollY)
await page.evaluate((top) => window.scrollTo(0, top - window.innerHeight * 0.42), workTop)
await page.waitForTimeout(180)
const readTrackX = () => page.evaluate(() => [...document.querySelectorAll('.marquee-track')].map((node) => new DOMMatrixReadOnly(getComputedStyle(node).transform).m41))
const workBefore = await readTrackX()
await page.evaluate(() => window.scrollBy(0, 360))
await page.waitForTimeout(180)
const workAfter = await readTrackX()
const work = {
  before: workBefore,
  after: workAfter,
  deltas: workAfter.map((value, index) => value - workBefore[index]),
  rowCount: await page.locator('.marquee-row').count(),
  tileCountPerRow: await page.locator('.marquee-row').first().locator('.marquee-tile').count(),
  tiles: await page.locator('.marquee-tile').evaluateAll((nodes) => nodes.map((node) => {
    const image = node.querySelector('img')
    return {
      label: node.querySelector('.marquee-label')?.textContent?.trim(),
      loaded: image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0,
    }
  })),
}
await page.screenshot({ path: `${outputDir}/04-selected-work.png` })

const projectOneTop = await page.locator('#project-01').evaluate((node) => node.getBoundingClientRect().top + window.scrollY)
const projectSamples = []
for (let offset = -80; offset <= 980; offset += 80) {
  await page.evaluate(({ top, offset }) => window.scrollTo(0, top - 96 + offset), { top: projectOneTop, offset })
  await page.waitForTimeout(40)
  projectSamples.push(await page.evaluate(() => {
    const first = document.querySelector('#project-01')?.getBoundingClientRect()
    const second = document.querySelector('#project-02')?.getBoundingClientRect()
    const firstTransform = document.querySelector('#project-01') ? new DOMMatrixReadOnly(getComputedStyle(document.querySelector('#project-01')).transform).a : 1
    if (!first || !second) return null
    return { scrollY: window.scrollY, first: { top: first.top, bottom: first.bottom }, second: { top: second.top, bottom: second.bottom }, firstScale: firstTransform, overlap: second.top < first.bottom && second.bottom > first.top }
  }))
}
const stackingSample = projectSamples.filter(Boolean).find((sample) => sample.overlap && sample.first.top >= 80 && sample.first.top <= 130 && sample.second.top > sample.first.top && sample.second.top < 300)
  ?? projectSamples.filter(Boolean).find((sample) => sample.overlap && sample.first.top >= 80 && sample.first.top <= 130 && sample.second.top > sample.first.top)
  ?? projectSamples.filter(Boolean).find((sample) => sample.overlap)
if (stackingSample) {
  await page.evaluate((scrollY) => window.scrollTo(0, scrollY), stackingSample.scrollY)
  await page.waitForTimeout(180)
}
await page.screenshot({ path: `${outputDir}/05-project-stacking.png` })

const liveButton = page.locator('#project-01').getByRole('button', { name: /在线预览/ })
await liveButton.focus()
await liveButton.evaluate((node) => node.click())
await page.waitForTimeout(350)
const liveDialogOpened = await page.getByRole('dialog').isVisible()
await page.keyboard.press('Escape')
await page.waitForTimeout(120)
const liveDialogClosedWithEscape = !(await page.getByRole('dialog').isVisible().catch(() => false))
const focusReturnedToLiveButton = await liveButton.evaluate((node) => document.activeElement === node)

const overflow = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth }))
const mobilePage = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 })
await mobilePage.goto(baseUrl, { waitUntil: 'networkidle' })
await mobilePage.waitForTimeout(900)
await mobilePage.screenshot({ path: `${outputDir}/06-mobile-hero.png` })
await mobilePage.locator('.work-marquee-section').scrollIntoViewIfNeeded()
await mobilePage.waitForTimeout(350)
await mobilePage.screenshot({ path: `${outputDir}/07-mobile-selected-work.png` })
await mobilePage.locator('#about').scrollIntoViewIfNeeded()
await mobilePage.waitForTimeout(500)
await mobilePage.screenshot({ path: `${outputDir}/08-mobile-about.png` })
await mobilePage.locator('.education-showcase').scrollIntoViewIfNeeded()
await mobilePage.waitForTimeout(350)
await mobilePage.screenshot({ path: `${outputDir}/08b-mobile-education.png` })
await mobilePage.locator('#experience').scrollIntoViewIfNeeded()
await mobilePage.waitForTimeout(500)
await mobilePage.screenshot({ path: `${outputDir}/09-mobile-experience.png` })
const secondExperienceButton = mobilePage.locator('.experience-row button').nth(1)
await secondExperienceButton.click()
await mobilePage.waitForTimeout(250)
await mobilePage.locator('.experience-row').nth(1).locator('.experience-highlights').scrollIntoViewIfNeeded()
await mobilePage.waitForTimeout(350)
await mobilePage.screenshot({ path: `${outputDir}/10-mobile-experience-details.png` })
await mobilePage.locator('.experience-gallery').scrollIntoViewIfNeeded()
await mobilePage.waitForTimeout(900)
await mobilePage.screenshot({ path: `${outputDir}/11-mobile-experience-gallery.png` })
const mobile = await mobilePage.evaluate(() => {
  const avatar = document.querySelector('.avatar-stage')?.getBoundingClientRect()
  const slot = document.querySelector('.project-stack-slot')
  const card = document.querySelector('.sticky-project')
  return {
    avatarWidth: avatar?.width ?? null,
    horizontalOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
    projectSlotHeight: slot ? getComputedStyle(slot).height : null,
    projectPosition: card ? getComputedStyle(card).position : null,
  }
})
const result = {
  viewport: page.viewportSize(),
  hero,
  about,
  experience,
  gallery,
  work,
  projects: { samples: projectSamples, stackingSample },
  modal: { liveDialogOpened, liveDialogClosedWithEscape, focusReturnedToLiveButton },
  overflow: { ...overflow, horizontal: overflow.scrollWidth > overflow.clientWidth },
  mobile,
  consoleErrors,
}

writeFileSync(`${outputDir}/results.json`, JSON.stringify(result, null, 2))
console.log(JSON.stringify(result, null, 2))
await mobilePage.close()
await browser.close()
