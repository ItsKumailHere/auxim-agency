export interface LeakItem {
  number: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  impact: string;
  metric: string;
  metricLabel: string;
  tradeExample: string;
  icon: string;
}

export const leaksData: LeakItem[] = [
  {
    number: "01",
    title: "The Unanswered Jobsite Call",
    subtitle: "When you can't pick up because your hands are dirty",
    problem:
      "When you are driving, working on a roof, or in a plant room, 62% of inbound calls go unanswered. 8 out of 10 UK homeowners hang up and immediately dial the next trade business on Google.",
    solution:
      "Auxim Missed Call TextBack fires an intelligent SMS within 5 seconds asking how you can help, capturing the job details and preventing the homeowner from calling your competitor.",
    impact: "+35% Captured Calls",
    metric: "62%",
    metricLabel: "Calls Missed on Jobsites",
    tradeExample:
      "Emergency boiler leak or power outage where the first trade to answer wins the £450 emergency callout.",
    icon: "PhoneMissed",
  },
  {
    number: "02",
    title: "Slow, Cluttered Mobile Sites",
    subtitle: "4-second loading times killing customer intent",
    problem:
      "Most local trade websites take 4+ seconds to load on mobile 4G, hide phone numbers behind complex navigation, and present generic American stock photography that destroys local credibility.",
    solution:
      "Auxim builds high-speed, bespoke React sites with permanent 1-tap call & quote bars, loading in under 0.5 seconds with clear UK trust badges.",
    impact: "+50% Faster Lead Capture",
    metric: "4.2s",
    metricLabel: "Avg UK Trade Website Load Time",
    tradeExample:
      "Homeowner standing in a cold kitchen needing boiler repairs, bouncing away if your site takes more than 2 seconds to load.",
    icon: "ZapOff",
  },
  {
    number: "03",
    title: "Invisible Google Map Ranking",
    subtitle: "Missing out on 80% of local trade search volume",
    problem:
      "If your Google Business Profile isn't in the top 3 map pack results for your town, you are completely invisible to 80% of high-intent local searchers ready to hire.",
    solution:
      "Auxim optimizes your categories, geotagged updates, citation accuracy, and reviews to propel your listing into the top 3 map pack positions.",
    impact: "Top 3 Map Pack Visibility",
    metric: "80%",
    metricLabel: "Clicks Go to Top 3 Map Listings",
    tradeExample:
      "Homeowner searching 'emergency roofer in Guildford' choosing strictly from the 3 map listings with reviews.",
    icon: "MapPinOff",
  },
  {
    number: "04",
    title: "The 6 PM – 10 PM Silence",
    subtitle: "Evening inquiries slipping away overnight",
    problem:
      "Over 35% of homeowner trade inquiries happen on evenings and weekends when homeowners are off work. If no one answers their message, they book someone else before 8 AM the next morning.",
    solution:
      "Our 24/7 WhatsApp AI answers inquiries instantly, qualifies job requirements, collects photos, and books site surveys while you sleep.",
    impact: "24/7 Booking Engine",
    metric: "35%",
    metricLabel: "Trade Searches Happen After 6 PM",
    tradeExample:
      "Couple planning a £12,000 bathroom renovation messaging on Sunday evening at 9 PM and getting an instant quote consultation.",
    icon: "Clock",
  },
  {
    number: "05",
    title: "Low Google Review Count",
    subtitle: "Superior craftsmanship obscured by low review counts",
    problem:
      "Having fewer reviews than local competitors makes homeowners hesitate, even if your craft is exceptional. Competitors with 50+ reviews win jobs on social proof alone.",
    solution:
      "Our automated review system triggers a frictionless 1-tap SMS review link to the customer's phone immediately upon job completion.",
    impact: "Consistent 5-Star Growth",
    metric: "78%",
    metricLabel: "Customers Pick the Highest Reviewed Listing",
    tradeExample:
      "Choosing between two electricians: one has 7 reviews from 2021, the other has 68 five-star reviews including 4 from this week.",
    icon: "StarOff",
  },
];
