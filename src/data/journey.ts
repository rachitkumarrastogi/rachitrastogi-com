/** Build a URL-safe path under /photos/ (handles spaces & special chars in filenames) */
export function photoUrl(...parts: string[]): string {
  return `/photos/${parts.map((p) => encodeURIComponent(p)).join("/")}`;
}

export type JourneyPin = {
  id: string;
  place: string;
  region: string;
  period: string;
  title: string;
  caption: string;
  lat: number;
  lng: number;
  images: string[];
};

export const journeyPins: JourneyPin[] = [
  {
    id: "roots-up",
    place: "Uttar Pradesh",
    region: "India",
    period: "Born & raised",
    title: "Roots in UP",
    caption:
      "Where it started — small-town discipline, curiosity, and the drive to build.",
    lat: 25.45,
    lng: 81.85,
    images: [],
  },
  {
    id: "pantnagar",
    place: "Pantnagar",
    region: "Uttarakhand, India",
    period: "BTech",
    title: "GB Pant University",
    caption: "Computer Engineering — foundation in systems and software.",
    lat: 29.0134,
    lng: 79.5135,
    images: [],
  },
  {
    id: "iiit",
    place: "Prayagraj",
    region: "India",
    period: "MTech · 2003–2007",
    title: "IIIT Allahabad",
    caption:
      "Intelligent Systems & Robotics — research published at CMU.",
    lat: 25.423,
    lng: 81.7774,
    images: [],
  },
  {
    id: "bangalore",
    place: "Bangalore",
    region: "India",
    period: "2005 – 2016",
    title: "SAP Labs & AXA",
    caption:
      "Release automation, enterprise cloud, and leading a 10-person global pod.",
    lat: 12.9716,
    lng: 77.5946,
    images: [
      photoUrl("career", "bangalore", "SAP Campus.JPG"),
      photoUrl("career", "bangalore", "SAP 2.jpg"),
    ],
  },
  {
    id: "cologne",
    place: "Cologne",
    region: "Germany",
    period: "Project assignment",
    title: "European delivery at AXA",
    caption:
      "On-site BI & regulatory platforms across 8+ European markets.",
    lat: 50.9375,
    lng: 6.9603,
    images: [
      photoUrl("career", "cologne", "AXA.jpg"),
      photoUrl("career", "cologne", "AXA 2.JPG"),
    ],
  },
  {
    id: "nyc",
    place: "New York",
    region: "USA",
    period: "2016 – 2021",
    title: "MSG & TD Ameritrade",
    caption:
      "High-throughput data systems and 0→1 platform to 1M+ daily users.",
    lat: 40.7505,
    lng: -73.9934,
    images: [
      photoUrl("career", "usa", "MSG", "MSG.jpg"),
      photoUrl("career", "usa", "MSG", "MSG 2.jpg"),
    ],
  },
  {
    id: "present",
    place: "Edison / Jersey City",
    region: "New Jersey, USA",
    period: "2021 – Present",
    title: "Charles Schwab",
    caption:
      "Platform & AI architecture for systems serving 30M+ users.",
    lat: 40.62,
    lng: -74.25,
    images: [],
  },
];

export const headshotPath = photoUrl("headshot", "headshot.jpg");

/** Chronological order for the route line on the map */
export const journeyRoute = journeyPins.map((p) => [p.lat, p.lng] as [number, number]);
