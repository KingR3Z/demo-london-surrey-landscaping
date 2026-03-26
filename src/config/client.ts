export const client = {
  // Business Details
  name: "London & Surrey Landscaping",
  tagline: "Landscaping | Gardens | Patios | Driveways",
  description: "Professional landscaper services in London.",
  category: "Landscaper",
  yearEstablished: "",

  // Contact
  phone: "07535 815741",
  email: "",
  website: "",

  // Location
  address: "London",
  city: "London",
  county: "",
  postcode: "",
  basedIn: "London",

  // People
  founderName: "",
  founderSurname: "",
  founderRole: "Director",

  // Social
  facebook: "",
  instagram: "",
  linkedin: "",
  twitter: "",

  // Reviews
  googleRating: "5.0",
  reviewCount: "6",

  // Services
  services: [
    { title: "Landscaping", description: "Complete garden transformations with expert hard and soft landscaping.", icon: "tree" },
    { title: "Garden Maintenance", description: "Regular garden care, lawn mowing, hedge trimming and seasonal tidy-ups.", icon: "shovel" },
    { title: "Fencing & Decking", description: "Quality timber fencing, gates, decking and outdoor structures.", icon: "wall" },
    { title: "Paving & Patios", description: "Professional patio and pathway installations in natural stone and block.", icon: "flower" },
  ],

  // DO NOT CHANGE — template defaults (desktop 16:9 + mobile 9:16 frames)
  cinematic: {
    frameCount: 181,
    frameDir: "/frames/",
    framePrefix: "frame_",
    frameExtension: ".jpg",
    framePadding: 4,
    scrollLength: "500vh",
    mobileFrameCount: 181,
    mobileFrameDir: "/frames-mobile/",
    scrubSpeed: 0.5,
    heroStillImage: "/images/hero-still.jpg",
    heroStillImageMobile: "/images/hero-still-mobile.jpg",
  },

  // DO NOT CHANGE — template defaults
  beforeAfter: {
    beforeImage: "/images/before.jpg",
    afterImage: "/images/after.jpg",
    beforeLabel: "Current Garden",
    afterLabel: "Our Vision",
  },

  // DO NOT CHANGE — template defaults
  transformations: [
    { before: "/images/before.jpg", after: "/images/after.jpg", label: "Complete Garden Renovation" },
    { before: "/images/patio-before.jpg", after: "/images/patio-after.jpg", label: "Patio Installation" },
    { before: "/images/front-before.jpg", after: "/images/front-after.jpg", label: "Front Garden" },
    { before: "/images/lawn-before.jpg", after: "/images/lawn-after.jpg", label: "Lawn Restoration" },
    { before: "/images/fence-before.jpg", after: "/images/fence-after.jpg", label: "New Fencing" },
    { before: "/images/deck-before.jpg", after: "/images/deck-after.jpg", label: "Decking & Furniture" },
    { before: "/images/path-before.jpg", after: "/images/path-after.jpg", label: "Garden Path" },
    { before: "/images/border-before.jpg", after: "/images/border-after.jpg", label: "Planting Borders" },
    { before: "/images/drive-before.jpg", after: "/images/drive-after.jpg", label: "Driveway" },
  ] as { before: string; after: string; label: string }[],

  // Reviews — placeholder
  reviews: [
    { name: "M.", rating: 1, text: "I emailed Hortlands requesting a quote for a new garden path and received the most condescending, belittling & rude email in return, stating they \"don't have availability for this type of work, nor would it be cost effective for me\" It is up to ME to decide if something is cost effective or not, not some stuck up little madam. Shame on you.", date: "8 months ago", badge: "Local Guide" },
    { name: "Kim Maini", rating: 5, text: "A very professional team. Stuart was our main contact and he was incredibly helpful,  he provided the patio stone samples based on what we were trying to achieve and budget, he gave sound advice on both the garden refurb and patio, always on hand to answer any questions. The team did a great job, they just got on with it and kept disruption to a minimum, leaving everything tidy and in order at the end of each working day. We are very pleased with the results and would happily recommend.", date: "9 months ago" },
    { name: "Timothy Smart", rating: 5, text: "A massive thank you Alan and the team at Hortlands for all the support with the project I’ve been working on for one of my clients. Without Alans support and knowledge I wouldn’t have been able to get this done, his availability to be on hand to talk things through in detail was a real sign to me of his love for trees and making sure clients feel confident in the decisions they are making.  Lee, Alfie and Chris did a great job and made the planting and irrigation work look effortless.  They also helped us get a big olive tree in place which was much appreciated.  It was great to meet and spend time with some like minded people who really knew their stuff. It was also great to hear Alfie’s journey and I’m sure he has a bright future ahead.  All the follow up contact has also been 5 star, Alan has continued to be on hand to support in making this as stress a free project as it could be. Thanks to all the team for their continued support, look forward to working together again in the future.", date: "9 months ago" },
    { name: "Stewart Gregory", rating: 5, text: "Great service and easy people to deal with.", date: "a year ago" },
    { name: "Sam Sage", rating: 3, text: "Hortlands generally do a great job but turnover of staff is an issue for consistency across such a large site as ours", date: "a year ago" },
    { name: "Millie Radley", rating: 5, text: "Steph and the team at Hortlands were absolutely amazing providing flowers for our wedding. The communication in the lead up was always clear and everyone was very quick to answer our queries. The flowers that Steph provided on the day were absolutely stunning and exactly what we wanted, they were just perfect! Thanks so much, Steph and all at Hortlands!", date: "2 years ago" },
  ] as { name: string; rating: number; text: string; date: string; badge?: string }[],

  // SEO
  seo: {
    title: "London & Surrey Landscaping | Landscaper in London",
    description: "Professional landscaper in London. 5.0-star rated on Google. Call for a free quote.",
  },
};
