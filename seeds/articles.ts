import { BasePayload } from "payload";
import path from "path";
import fs from "fs";

export const articlesSeed = async (payload: BasePayload) => {
    const existingArticles = await payload.find({
      collection: 'articles' as any,
      limit: 1,
    })

    if (existingArticles.totalDocs === 0) {
      payload.logger.info('🌱 No articles found. Running native localized asset file seeding...')

     const allArticles = [
        {
          id: 4,
          category: "Press Release",
          title: "SAP Labs India Unveils 2026 Startup Studio Cohort Focused on Enterprise AI and Deep-Tech Innovation",
          image: "article-images/image-4.avif",
          link: "https://theprint.in/ani-press-releases/sap-labs-india-unveils-2026-startup-studio-cohort-focused-on-enterprise-ai-and-deep-tech-innovation/2948992/"
        },
        {
          id: 5,
          category: "Case Study",
          title:"ANSCER's Real Play Isn’t Just Robots. It’s Overhauling the Entire Warehouse",
          image: "article-images/image-3.webp",
          link: "https://analyticsindiamag.com/deep-tech/anscers-real-play-isnt-just-robots-its-overhauling-the-entire-warehouse"
        },
        {
          id: 6,
          category: "Press Release",
          title: "ANSCER Robotics launches LBR 500",
          image: "article-images/image-1.jpg",
          link: "https://www.engineering.com/anscer-robotics-launches-lbr500/"
        },
        {
          id: 7,
          category: "Press Release",
          title: "ANSCER Robotics Expands into the U.S. Market, Appointing Industry Veteran Mark Messina as CEO of Americas",
          image: "article-images/image-2.jpg",
          link: "https://www.prnewswire.com/news-releases/anscer-robotics-expands-into-the-us-market-appointing-industry-veteran-mark-messina-as-ceo-of-americas-302376136.html"
        },
        {
          id: 3,
          category: "Press Release",
          title: "ANSCER Robotics Expands AMR Fleet With New AR-Series Models",
          image: "events/series-a-funding.png",
          link: "https://manufacturing.economictimes.indiatimes.com/news/hi-tech/anscer-robotics-raises-5-4-million-in-series-a-led-by-ian-alpha-fund/131229847"
        },
        {
          id: 2,
          category: "Announcement",
          title: "Join us at IWS 2026",
          image: "events/iws-2026.png",
          link: "https://events.anscer.com/iws"
        },
        {
          category: "Announcement",
          id: 1,
          title: "Join us at Automate 2026",
          image: "events/automate-2026.png",
          link: "https://events.anscer.com/automate",
        },
      ];
      const seedAssetsDir = path.resolve(process.cwd(), './public/anscer/images');

      for (const article of allArticles) {
        try {
          let mediaId: string | null = null
          const fullFilePath = path.join(seedAssetsDir, article.image)

          // 1. Verify if the file physically exists locally before processing
          if (fs.existsSync(fullFilePath)) {
            const fileBuffer = fs.readFileSync(fullFilePath)
            const extension = path.extname(article.image).replace('.', '')

            // Upload the real local file straight to the media collection
            const uploadedMedia = await payload.create({
              collection: 'media' as any,
              data: {
                alt: `Cover asset for ${article.title}`,
              },
              file: {
                data: fileBuffer,
                name: article.image,
                mimetype: `image/${extension === 'jpg' ? 'jpeg' : extension}`,
                size: fileBuffer.length,
              },
            })
            mediaId = uploadedMedia.id
          } else {
            payload.logger.warn(`⚠ Local file not found at ${fullFilePath}, skipping upload step for this document.`)
          }

          // 2. Map the actual media reference back to the article row
          await payload.create({
            collection: 'articles' as any,
            data: {
              postTitle: article.title,
              category: article.category,
              summary: article.title,
              articleLink: article.link,
              thumbnailImage: mediaId, // Valid hex string from the real file upload!
              _status: 'published',
            },
          })
        } catch (err: any) {
          payload.logger.error(`❌ Failed to seed document context for "${article.title}": ${err.message}`)
        }
      }
      payload.logger.info('🎉 Seeding successfully completed!')
    }
}