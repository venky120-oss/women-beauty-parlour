/* ==========================================================
   KISHORE BEAUTY PARLOUR — CONTENT DATA
   Services, testimonials and gallery used across the site.
   Prices are indicative and can be edited here.
   ========================================================== */
window.img = function (id, w) {
  return "https://images.unsplash.com/" + id + "?auto=format&fit=crop&w=" + (w || 800) + "&q=70";
};
/* Responsive srcset: imgSet(id, [400, 600], 0.75) -> "...w=400&h=300 400w, ..." */
window.imgSet = function (id, widths, ratio) {
  return widths.map(function (w) { return img(id, w) + (ratio ? "&h=" + Math.round(w * ratio) : "") + " " + w + "w"; }).join(", ");
};

window.SERVICES = [
  {
    slug: "haircut-styling", name: "Haircut & Hair Styling", cat: "hair", icon: "scissors",
    image: "photo-1522337360788-8b13dee7a37e", price: 300,
    short: "Precision cuts and graceful styling designed around your face shape and lifestyle.",
    what: "A personalised haircut and styling session where our stylist studies your face shape, hair texture and daily routine before recommending a cut. Whether you want a fresh layered look, a sleek bob or simply a neat trim, we finish every service with a blow-dry and styling tips you can follow at home.",
    steps: ["Consultation on your face shape, hair type and the look you love", "Gentle shampoo and conditioning with a relaxing scalp massage", "Precision cut by our senior stylist", "Blow-dry and finishing styling", "Home-care and styling tips for your new look"],
    benefits: ["Removes split ends and keeps hair healthy", "A shape that flatters your features", "Easier everyday styling", "Instant confidence boost"],
    whoFor: ["Anyone wanting a fresh new look", "Women growing out their hair who need regular trims", "Brides and guests before a function", "Teens and working professionals"],
    prices: [["Hair Trim (Split Ends)", "30 min", 300], ["Straight / U / V Cut", "40 min", 400], ["Layer / Step Cut", "60 min", 650], ["Advanced Cut (Feather, Bob)", "60 min", 800], ["Blow-Dry / Ironing / Curls", "45 min", 600]],
    faqs: [["How long does a haircut take?", "Most haircuts take 30–60 minutes including wash and blow-dry."], ["Should I come with washed hair?", "No need — every cut includes a wash with salon-grade shampoo and conditioner."], ["Can you suggest a style for me?", "Yes. Our stylist will recommend options based on your face shape, hair texture and how much time you spend styling."], ["Do you style hair for functions?", "Yes, we offer buns, braids, curls and open-hair styling for parties and weddings."]],
    related: ["hair-spa", "hair-coloring", "party-makeup"]
  },
  {
    slug: "hair-spa", name: "Hair Spa & Treatments", cat: "hair", icon: "droplets",
    image: "photo-1560066984-138dadb4c035", price: 800,
    short: "Deep nourishment for dry, frizzy or damaged hair with a calming scalp massage.",
    what: "A hair spa is a deep-conditioning ritual that restores moisture, strength and shine. We combine a relaxing oil massage, steam, a nourishing mask suited to your hair concern, and a gentle wash — leaving hair soft, smooth and manageable. Advanced treatments like keratin and smoothening are also available.",
    steps: ["Scalp and hair analysis", "Warm oil massage to relax and stimulate the scalp", "Steam to open the hair cuticles", "Treatment mask chosen for your concern (dryness, frizz, hair fall, dandruff)", "Wash, conditioning and blow-dry"],
    benefits: ["Reduces frizz and dryness", "Improves shine and softness", "Helps control dandruff and scalp build-up", "Deeply relaxing — great for stress relief"],
    whoFor: ["Dry, frizzy or chemically treated hair", "Women facing hair fall or dull hair", "Anyone exposed to Chennai's heat and humidity", "Pre-bridal hair preparation"],
    prices: [["Classic Hair Spa", "60 min", 800], ["Anti-Dandruff Spa", "60 min", 1000], ["Hair Fall Control Spa", "75 min", 1200], ["Keratin Treatment", "2–3 hrs", 3500], ["Hair Smoothening", "3–4 hrs", 4500]],
    faqs: [["How often should I get a hair spa?", "Once every 3–4 weeks keeps hair consistently healthy."], ["Is a hair spa safe for coloured hair?", "Yes. We choose colour-safe masks and products."], ["What is the difference between keratin and smoothening?", "Keratin is a nourishing treatment that reduces frizz for a few months; smoothening gives straighter, sleeker hair for longer."], ["Can I wash my hair after a spa?", "You can wash normally from the next day. After keratin, we'll give you specific aftercare instructions."]],
    related: ["haircut-styling", "hair-coloring", "facial"]
  },
  {
    slug: "facial", name: "Facial & Skin Care", cat: "skin", icon: "sparkles",
    image: "photo-1570172619644-dfd03ed5d881", price: 1200,
    short: "Glow-boosting facials tailored to your skin type for radiant, healthy skin.",
    what: "Our facials are customised after a quick skin analysis. Each one includes deep cleansing, exfoliation, massage and a targeted mask to treat concerns like dullness, tan, pigmentation, dryness or acne. You leave with visibly brighter, refreshed skin.",
    steps: ["Skin analysis and consultation", "Double cleansing and gentle exfoliation", "Steam and extraction (if needed)", "Relaxing facial massage with serum", "Treatment mask and finishing moisturiser with SPF"],
    benefits: ["Instant glow and brighter complexion", "Reduces tan, dullness and uneven tone", "Deep hydration and softer skin", "Relaxes facial muscles and relieves stress"],
    whoFor: ["Dull, tanned or tired-looking skin", "Brides and guests before events", "Women wanting a monthly self-care ritual", "All skin types — oily, dry, combination and sensitive"],
    prices: [["Fruit Facial", "60 min", 1200], ["Gold Facial", "75 min", 1800], ["De-Tan Facial", "60 min", 1500], ["Anti-Acne Facial", "75 min", 1800], ["Hydra Glow Facial", "90 min", 2800]],
    faqs: [["Which facial is right for me?", "Our beautician will check your skin and recommend the best option. You can also chat with us on WhatsApp before your visit."], ["How often should I get a facial?", "Every 3–4 weeks is ideal, matching your skin's natural renewal cycle."], ["Can I wear makeup after a facial?", "We recommend avoiding makeup for 12–24 hours so your skin can breathe."], ["How many days before an event should I get a facial?", "Ideally 3–5 days before, so any minor redness settles and the glow peaks."]],
    related: ["cleanup", "threading", "bridal-makeup"]
  },
  {
    slug: "cleanup", name: "Cleanup", cat: "skin", icon: "leaf",
    image: "photo-1616394584738-fc6e612e71b9", price: 500,
    short: "A quick, refreshing deep-cleanse to remove dirt, oil and blackheads.",
    what: "A cleanup is a shorter, lighter alternative to a facial. It focuses on cleansing, exfoliating and removing blackheads and whiteheads — perfect as a monthly maintenance treatment or a quick refresh before an outing.",
    steps: ["Cleansing to remove makeup, oil and dirt", "Scrub to exfoliate dead skin", "Steam and gentle blackhead removal", "Soothing face pack", "Toner and moisturiser"],
    benefits: ["Unclogs pores and reduces blackheads", "Fresh, clean and smooth skin", "Quick — ideal for busy schedules", "Budget-friendly monthly care"],
    whoFor: ["Oily and acne-prone skin", "Teenagers and college students", "Working women with limited time", "Anyone between facial sessions"],
    prices: [["Basic Cleanup", "30 min", 500], ["Fruit Cleanup", "40 min", 650], ["De-Tan Cleanup", "45 min", 800], ["Charcoal Cleanup", "45 min", 900]],
    faqs: [["What is the difference between a cleanup and a facial?", "A cleanup focuses on cleansing and exfoliation. A facial adds massage, serums and targeted treatment masks."], ["Is cleanup painful?", "Not at all. Blackhead removal may feel slightly uncomfortable but is done gently."], ["How often should I get a cleanup?", "Once every 2–3 weeks works well, especially for oily skin."], ["Is it suitable for sensitive skin?", "Yes, we use mild products and skip harsh steps for sensitive skin."]],
    related: ["facial", "threading", "waxing"]
  },
  {
    slug: "threading", name: "Threading & Eyebrow Shaping", cat: "skin", icon: "pen-line",
    image: "photo-1487412947147-5cebf100ffc2", price: 50,
    short: "Clean, precise brows and facial hair removal shaped to frame your face.",
    what: "Threading is a precise, chemical-free method of removing facial hair. Our experienced beauticians shape your eyebrows to suit your face and remove upper-lip, chin and forehead hair quickly and hygienically with fresh thread for every client.",
    steps: ["Discuss your preferred brow shape", "Mapping the brow to suit your face", "Precise threading with fresh thread", "Soothing toner or aloe gel"],
    benefits: ["Sharp, well-defined brows", "Chemical-free — gentle on skin", "Quick and long-lasting results", "Removes even fine hair"],
    whoFor: ["Everyone — it's our most frequent service", "Sensitive skin that reacts to wax", "Brides wanting perfectly shaped brows", "Anyone maintaining a neat look"],
    prices: [["Eyebrow Threading", "10 min", 50], ["Upper Lip", "5 min", 30], ["Forehead / Chin", "5 min", 30], ["Full Face Threading", "25 min", 200], ["Eyebrow Tinting", "20 min", 300]],
    faqs: [["Does threading hurt?", "There's a mild stinging sensation that fades within minutes. Regular threading makes it easier."], ["How long does it last?", "Usually 2–4 weeks depending on hair growth."], ["Do you use fresh thread?", "Yes, always — a new thread for every client."], ["Can I do makeup right after threading?", "We suggest waiting a few hours to avoid irritation."]],
    related: ["facial", "cleanup", "waxing"]
  },
  {
    slug: "waxing", name: "Waxing", cat: "body", icon: "feather",
    image: "photo-1544161515-4ab6ce6db874", price: 250,
    short: "Smooth, long-lasting hair removal with gentle honey, Rica and chocolate wax.",
    what: "We offer full-body and partial waxing using premium honey, Rica and chocolate waxes. All wax is heated to a safe temperature and applied with fresh disposable spatulas. Choose Rica or peel-off wax for sensitive areas and a gentler experience.",
    steps: ["Skin cleansed and prepped", "Wax applied in the direction of hair growth", "Quick, clean strip removal", "Soothing post-wax lotion"],
    benefits: ["Smooth skin for 3–4 weeks", "Hair grows back finer over time", "Removes dead skin for a softer feel", "Hygienic — single-use spatulas"],
    whoFor: ["Anyone wanting smooth arms, legs and underarms", "Brides preparing for the wedding", "Women heading on holidays or to events", "Sensitive skin (choose Rica wax)"],
    prices: [["Full Arms (Honey)", "20 min", 250], ["Full Arms (Rica)", "20 min", 450], ["Full Legs (Honey)", "30 min", 450], ["Full Legs (Rica)", "30 min", 750], ["Underarms (Rica)", "10 min", 150], ["Full Body (Rica)", "2 hrs", 2500]],
    faqs: [["Which wax is best for sensitive skin?", "Rica (liposoluble) wax is gentlest and best for sensitive skin."], ["How long should hair be before waxing?", "About 4–5 mm (roughly 2–3 weeks of growth) gives the best results."], ["Is waxing hygienic?", "Yes — we never double-dip and use fresh spatulas and strips for every client."], ["What should I avoid after waxing?", "Avoid sun exposure, hot showers and heavy perfumes for 24 hours."]],
    related: ["manicure-pedicure", "threading", "cleanup"]
  },
  {
    slug: "manicure-pedicure", name: "Manicure & Pedicure", cat: "nails", icon: "hand",
    image: "photo-1604654894610-df63bc536371", price: 500,
    short: "Pampering hand and foot care with soak, scrub, massage and polish.",
    what: "Relaxing hand and foot treatments that clean, exfoliate, moisturise and beautify. Every session includes nail shaping, cuticle care, scrub, massage and your choice of polish. Our spa versions add a mask and longer massage for extra pampering.",
    steps: ["Warm soak with aromatic salts", "Nail cutting, filing and cuticle care", "Exfoliating scrub to remove dead skin", "Relaxing massage with nourishing cream", "Polish of your choice"],
    benefits: ["Clean, healthy-looking nails", "Softer hands and smooth heels", "Improves blood circulation", "Deeply relaxing"],
    whoFor: ["Anyone with dry hands or cracked heels", "Before weddings, parties and vacations", "Working women who want monthly self-care", "Elderly clients needing gentle foot care"],
    prices: [["Classic Manicure", "40 min", 500], ["Classic Pedicure", "50 min", 600], ["Spa Manicure", "60 min", 800], ["Spa Pedicure", "60 min", 950], ["Gel Polish (Hands)", "45 min", 700]],
    faqs: [["Are your tools sterilised?", "Yes, all metal tools are sterilised after every use and files are single-use."], ["How long does a pedicure last?", "The results last around 3–4 weeks with basic home care."], ["Can I get gel polish with a manicure?", "Yes, simply let us know — gel can be added to any manicure."], ["Is pedicure good for cracked heels?", "Yes, our spa pedicure is especially helpful for dry and cracked heels."]],
    related: ["nail-art", "waxing", "facial"]
  },
  {
    slug: "bridal-makeup", name: "Bridal Makeup", cat: "bridal", icon: "crown",
    image: "photo-1617627143750-d86bc21e42bb", price: 15000,
    short: "Long-lasting, camera-ready bridal looks for South Indian and North Indian weddings.",
    what: "Our bridal makeup service creates a flawless, long-lasting look that reflects your personality and complements your saree or lehenga, jewellery and wedding traditions. We specialise in traditional South Indian bridal looks as well as HD and airbrush makeup for receptions.",
    steps: ["Pre-wedding consultation and trial (Premium & Elite)", "Skin prep and priming for long wear", "HD or airbrush makeup application", "Bridal hairstyle with flowers and accessories", "Saree draping and jewellery setting", "Final touch-ups before you step out"],
    benefits: ["Long-lasting, sweat-proof finish for Chennai weather", "Looks beautiful in photos and in person", "Stress-free, relaxed bridal preparation", "Complete look — makeup, hair and draping"],
    whoFor: ["Brides for muhurtham, wedding and reception", "Engagement and nichayathartham ceremonies", "Mehendi and sangeet functions", "Bridesmaids and family members"],
    prices: [["Basic Bridal Makeup", "2–3 hrs", 15000], ["Premium HD Bridal", "3 hrs", 25000], ["Elite Airbrush Bridal", "3–4 hrs", 40000], ["Engagement / Reception Look", "2 hrs", 10000]],
    faqs: [["How early should I book?", "We recommend booking 2–3 months ahead, especially during wedding season."], ["Do you travel to the venue?", "Yes, we offer on-location bridal makeup across Chennai. Travel charges may apply."], ["Do you offer a trial?", "Trials are included in Premium and Elite packages and available separately for Basic."], ["Will the makeup last the full day?", "Yes, we use long-wear, sweat-resistant products suited to Chennai's climate."]],
    related: ["party-makeup", "saree-draping", "facial"]
  },
  {
    slug: "party-makeup", name: "Party Makeup", cat: "makeup", icon: "wand-sparkles",
    image: "photo-1516975080664-ed2fc6a32937", price: 2500,
    short: "Glamorous looks for receptions, birthdays, festivals and evening events.",
    what: "From soft, natural glam to bold evening looks, our party makeup gives you a polished, photo-ready finish for any occasion. Every look is customised to your outfit, skin tone and the event.",
    steps: ["Discuss your outfit, event and preferred look", "Skin prep and priming", "Makeup application — base, eyes and lips", "Lashes and finishing touches", "Optional hairstyle and saree draping"],
    benefits: ["Polished, camera-ready look", "Customised to your outfit and skin tone", "Long-lasting finish", "Professional products for every skin type"],
    whoFor: ["Wedding guests and family of the bride", "Birthday parties and anniversaries", "Festivals, college events and photoshoots", "Corporate events and evening functions"],
    prices: [["Simple Party Makeup", "60 min", 2500], ["HD Party Makeup", "75 min", 4000], ["Party Makeup + Hairstyle", "90 min", 4500], ["Kids Party Makeup", "30 min", 1000]],
    faqs: [["How long does party makeup take?", "About 60–90 minutes depending on the look and hairstyle."], ["Do you provide lashes?", "Yes, lashes are included with HD party makeup."], ["Can you do makeup for a group?", "Yes — please see our group booking offer."], ["Should I come with a clean face?", "Yes, please come with a freshly washed face and no makeup."]],
    related: ["saree-draping", "bridal-makeup", "haircut-styling"]
  },
  {
    slug: "saree-draping", name: "Saree Draping", cat: "makeup", icon: "shirt",
    image: "photo-1610030469983-98e550d6193c", price: 500,
    short: "Elegant, secure draping in Nivi, Madisar, butterfly and modern styles.",
    what: "Look graceful and feel comfortable all day with professional saree draping. We drape silk, Kanjeevaram, georgette and designer sarees in traditional and modern styles, with neat pleats that stay in place.",
    steps: ["Choose your draping style", "Neat pleat setting with pins", "Secure pallu styling", "Final adjustment for comfort and movement"],
    benefits: ["Perfect pleats that stay in place", "Elegant, slim silhouette", "Comfortable to walk and sit all day", "Saves time and stress on event days"],
    whoFor: ["Brides and bridesmaids", "Wedding guests and family members", "Festivals, functions and farewell parties", "Anyone new to wearing sarees"],
    prices: [["Regular Saree Draping", "20 min", 500], ["Silk / Kanjeevaram Draping", "30 min", 700], ["Madisar Draping", "40 min", 1200], ["Designer / Lehenga-Style Draping", "30 min", 800]],
    faqs: [["Should I bring my own pins?", "No need — we provide safety pins. Just bring your saree, blouse and petticoat."], ["Do you do Madisar draping?", "Yes, both 9-yard Iyer and Iyengar style Madisar draping."], ["Can you drape at my home?", "Yes, for bookings of 3 or more people or with bridal packages."], ["How long does draping last?", "Properly pinned drapes stay neat for the whole event."]],
    related: ["party-makeup", "bridal-makeup", "haircut-styling"]
  },
  {
    slug: "hair-coloring", name: "Hair Coloring & Highlights", cat: "hair", icon: "palette",
    image: "photo-1562322140-8baeececf3df", price: 1500,
    short: "Global colour, highlights and grey coverage with ammonia-free options.",
    what: "From subtle highlights to a complete global colour change or root touch-up, our colour specialists choose shades that complement your skin tone. Ammonia-free and nourishing colour options are available for healthier results.",
    steps: ["Shade consultation and patch test", "Sectioning and colour application", "Processing time for even colour", "Colour-lock wash and conditioning", "Blow-dry and aftercare guidance"],
    benefits: ["Covers greys beautifully", "Adds dimension and shine", "Ammonia-free options available", "Refreshes your overall look"],
    whoFor: ["Women wanting grey coverage", "Anyone wanting a style refresh", "Brides wanting a subtle tone change", "Fans of highlights and balayage"],
    prices: [["Root Touch-Up", "60 min", 1500], ["Global Colour (Short Hair)", "90 min", 2500], ["Global Colour (Long Hair)", "2 hrs", 4000], ["Highlights (per streak)", "—", 300], ["Balayage", "3 hrs", 6000]],
    faqs: [["Do you do a patch test?", "Yes, we recommend a patch test 48 hours before your first colour service."], ["Will colouring damage my hair?", "We use quality, ammonia-free options and recommend a hair spa to keep hair healthy."], ["How long does colour last?", "Typically 4–6 weeks before roots show."], ["Can I colour hair after keratin?", "Yes, ideally colour before keratin or wait two weeks after."]],
    related: ["haircut-styling", "hair-spa", "party-makeup"]
  },
  {
    slug: "nail-art", name: "Nail Art & Nail Care", cat: "nails", icon: "gem",
    image: "photo-1610992015732-2449b76344bc", price: 600,
    short: "Gel, acrylic extensions and creative nail art for every mood and occasion.",
    what: "Express yourself with beautiful nails. We offer gel polish, acrylic and gel extensions, French tips, chrome and hand-painted nail art — all done with sterilised tools and quality products.",
    steps: ["Choose your design and colour", "Nail prep — shaping and cuticle care", "Extensions or base application", "Design, curing and top coat", "Cuticle oil and aftercare tips"],
    benefits: ["Long-lasting, chip-resistant shine", "Unique designs that match your outfit", "Strong, beautiful nails", "Perfect for brides and events"],
    whoFor: ["Brides and bridesmaids", "Anyone who loves creative nails", "Women with brittle or short nails", "Vacation and party looks"],
    prices: [["Gel Polish", "45 min", 600], ["Gel Extensions", "90 min", 1800], ["Acrylic Extensions", "90 min", 2000], ["Nail Art (per nail)", "—", 100], ["Extension Removal", "30 min", 400]],
    faqs: [["How long do gel nails last?", "Gel polish lasts 2–3 weeks; extensions 3–4 weeks with refills."], ["Are extensions harmful to nails?", "Not when applied and removed professionally. Never pull them off at home."], ["Can I bring a design reference?", "Absolutely — share it on WhatsApp before your visit."], ["Do you do bridal nail art?", "Yes, with designs matched to your wedding outfit and mehendi."]],
    related: ["manicure-pedicure", "bridal-makeup", "party-makeup"]
  }
];

/* Extra services shown on the Services page (no separate detail page) */
window.SERVICE_EXTRAS = [
  { slug: "body-polishing", name: "Body Polishing", cat: "body", image: "photo-1515377905703-c4788e51af15", price: 2500, link: "pricing.html#body", short: "Full-body exfoliation and nourishing wrap for silky, glowing skin." },
  { slug: "pre-bridal", name: "Pre-Bridal Package", cat: "bridal", image: "photo-1597157639073-69284dc0fdaf", price: 6000, link: "bridal.html#pre-bridal", short: "3 to 6 sessions of facials, hair spa and body care before your wedding." },
  { slug: "head-massage", name: "Head & Shoulder Massage", cat: "wellness", image: "photo-1600948836101-f9ffda59d250", price: 400, link: "pricing.html#wellness", short: "Warm-oil champi to melt away stress, tension and tiredness." },
  { slug: "body-massage", name: "Relaxing Body Massage", cat: "wellness", image: "photo-1544161515-4ab6ce6db874", price: 1800, link: "pricing.html#wellness", short: "Soothing full-body massage by trained women therapists." },
  { slug: "foot-reflexology", name: "Foot Reflexology", cat: "wellness", image: "photo-1515377905703-c4788e51af15", price: 600, link: "pricing.html#wellness", short: "Pressure-point foot therapy that relaxes the whole body." }
];

window.TESTIMONIALS = [
  { name: "Priya S.", area: "Anna Nagar", service: "Bridal Makeup Package", cat: "bridal", text: "Kishore Beauty Parlour made my wedding day so special. My makeup stayed perfect from the muhurtham to the reception, even in the Chennai heat. Everyone kept asking who did my look!" },
  { name: "Divya R.", area: "T. Nagar", service: "Gold Facial", cat: "skin", text: "The facial was so relaxing and my skin was glowing for days. The beautician explained every step and suggested products for my combination skin. Very hygienic and calm place." },
  { name: "Lakshmi K.", area: "Velachery", service: "Hair Spa", cat: "hair", text: "My hair was very frizzy and dry. After two hair spa sessions it feels soft and manageable. The scalp massage alone is worth the visit!" },
  { name: "Meena V.", area: "Adyar", service: "Party Makeup", cat: "makeup", text: "Got my makeup done for my cousin's reception. It looked natural yet glamorous and photographed beautifully. Will definitely come back for the next function." },
  { name: "Ananya P.", area: "Mylapore", service: "Haircut & Styling", cat: "hair", text: "I was nervous about cutting my long hair, but the stylist understood exactly what I wanted. The layered cut suits me perfectly. Very happy!" },
  { name: "Kavya N.", area: "Porur", service: "Manicure & Pedicure", cat: "nails", text: "Such a pampering experience. Clean tools, gentle staff and my heels have never felt this smooth. A perfect Sunday self-care treat." },
  { name: "Swathi M.", area: "Tambaram", service: "Pre-Bridal Package", cat: "bridal", text: "I took the pre-bridal sessions a month before my wedding. My skin improved so much and I felt relaxed and confident on the big day. Thank you to the whole team!" },
  { name: "Revathi G.", area: "Nungambakkam", service: "Saree Draping", cat: "makeup", text: "They draped my Kanjeevaram silk saree so neatly. The pleats stayed in place the whole evening and I could move comfortably." },
  { name: "Harini T.", area: "Kodambakkam", service: "Threading & Cleanup", cat: "skin", text: "My regular place for threading. They always use fresh thread, the shape is perfect every time, and the cleanup is very refreshing." },
  { name: "Sneha J.", area: "Chromepet", service: "Nail Art", cat: "nails", text: "Loved my bridal nail art! They matched the design to my lehenga perfectly and it lasted for almost three weeks." },
  { name: "Janani B.", area: "Ashok Nagar", service: "Hair Coloring", cat: "hair", text: "Got a root touch-up and subtle highlights. The colour looks very natural and suits my skin tone. They also used ammonia-free colour which I appreciated." },
  { name: "Pooja D.", area: "Besant Nagar", service: "Engagement Makeup", cat: "bridal", text: "My engagement look was exactly what I dreamed of — soft, elegant and fresh. The team was punctual and made me feel so comfortable." },
  { name: "Nithya L.", area: "Guindy", service: "De-Tan Facial", cat: "skin", text: "Visible difference after just one session. The tan from my vacation was reduced and my skin felt hydrated. Lovely staff." },
  { name: "Aishwarya C.", area: "Perambur", service: "Group Makeup", cat: "makeup", text: "Five of us got ready here for my sister's wedding. Everyone looked gorgeous and they managed the timing very well. Great group offer too." },
  { name: "Vidya H.", area: "Sholinganallur", service: "Waxing", cat: "body", text: "Rica wax was almost painless and my sensitive skin had no redness. Quick, clean and professional service." }
];

window.GALLERY = [
  { id: "photo-1617627143750-d86bc21e42bb", cat: "bridal", title: "Traditional Bridal Look" },
  { id: "photo-1522337360788-8b13dee7a37e", cat: "hair", title: "Precision Haircut" },
  { id: "photo-1570172619644-dfd03ed5d881", cat: "skin", title: "Glow Facial" },
  { id: "photo-1487412947147-5cebf100ffc2", cat: "makeup", title: "Soft Glam Makeup" },
  { id: "photo-1604654894610-df63bc536371", cat: "nails", title: "Classic Manicure" },
  { id: "photo-1562322140-8baeececf3df", cat: "hair", title: "Hair Colour" },
  { id: "photo-1516975080664-ed2fc6a32937", cat: "makeup", title: "Party Makeup Prep" },
  { id: "photo-1610992015732-2449b76344bc", cat: "nails", title: "Nail Art" },
  { id: "photo-1616394584738-fc6e612e71b9", cat: "skin", title: "Hydrating Mask" },
  { id: "photo-1560066984-138dadb4c035", cat: "hair", title: "Hair Spa Ritual" },
  { id: "photo-1595476108010-b4d1f102b1b1", cat: "hair", title: "Hair Styling Session" },
  { id: "photo-1512496015851-a90fb38ba796", cat: "makeup", title: "Makeup Essentials" },
  { id: "photo-1596462502278-27bfdc403348", cat: "makeup", title: "Premium Products" },
  { id: "photo-1607779097040-26e80aa78e66", cat: "nails", title: "Gel Polish" },
  { id: "photo-1515377905703-c4788e51af15", cat: "skin", title: "Relaxing Treatment" },
  { id: "photo-1544161515-4ab6ce6db874", cat: "skin", title: "Spa Therapy" },
  { id: "photo-1503236823255-94609f598e71", cat: "skin", title: "Face Pack Ritual" },
  { id: "photo-1519699047748-de8e457a634e", cat: "makeup", title: "Curl-Defining Glam" },
  { id: "photo-1597157639073-69284dc0fdaf", cat: "bridal", title: "Bridal Jewellery Styling" },
  { id: "photo-1610030469983-98e550d6193c", cat: "bridal", title: "Saree Elegance" },
  { id: "photo-1600948836101-f9ffda59d250", cat: "hair", title: "Salon Care" },
  { id: "photo-1457972729786-0411a3b2b626", cat: "nails", title: "Hand Care" },
  { id: "photo-1587271407850-8d438ca9fdf2", cat: "bridal", title: "Pastel Bridal Look" },
  { id: "photo-1630526720753-aa4e71acf67d", cat: "bridal", title: "Wedding Day Glow" }
];
