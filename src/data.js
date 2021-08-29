// Services images
import agencies from './assets/agencies.png'
import marketing from "./assets/marketing.png"
import smallBusiness from "./assets/smallbusiness.jpeg"

// Reviews images
export const servicesData = [
    {
        id: 1,
        title: "For Agencies",
        body: "Overwhelmed? Overworked? Not anymore! Our vetted developers can take care of your or your clients’ requests, allowing you to focus on what matters.",
        img: agencies
    },
      {
        id: 2,
        title: "For Marketing",
        body: "Reach your marketing goals without worrying about your website! You provide the ideas and concepts, and we’ll deliver top-notch marketing materials.",
        img: marketing
    },
    {
        id: 3,
        title: "For Small Businesses",
        body: "Don’t break your budget, but don’t settle for sloppy website that could harm your business. Knock your competitors out of the park while saving money.",
        img:smallBusiness
    },
];



export const pricingData = [
  {
    title: 'Essentials',
    description: "Create all of your everyday designs. Best for small businesses & solo entrepreneurs.",
    price: 449,
    features:['Unlimited Requests', 'Unlimited Revisions', 'Unlimited Brands', 'Free Stock Assets']
    
  },
   {
    title: 'Advanced',
    description: "Create more advanced designs. Best for startups & marketing teams.",
    price: 549,
    features:['Custom Illustrations', 'Web Development', '2-3 seconds GIF', '1 Daily Output']
    
  },
   {
    title: 'Business',
    description: "Get double the output everyday. Best for agencies & medium to large businesses.",
    price: 899,
    features:['Everything in Advanced', '2 Daily Output', 'Prioritized Support']
    
  },
];

export const reviewsData = [
   {
    id: 1,
    name: 'Brad Philips',
    title: 'Founder',
    image: 'https://randomuser.me/api/portraits/med/men/5.jpg',
    
    description:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.",
  },
  {
    id: 2,
    name: 'Micheal Si',
    title: 'Team Lead',
    image: 'https://randomuser.me/api/portraits/med/men/1.jpg',
    
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
  },
  {
    id: 3,
    name: 'Kay Adams',
    title: 'CEO',
    image: 'https://randomuser.me/api/portraits/med/women/8.jpg',
    
    description:
      'Sed ac turpis tincidunt, lobortis lectus ut, aliquet dui. Nulla interdum elit nunc, ut vulputate risus bibendum.',
  },
  {
    id: 4,
    name: 'Thomas Hagen ',
    title: 'Photographer',
    image: 'https://randomuser.me/api/portraits/med/men/45.jpg',
    description:
      'Etiam id justo nec nunc egestas venenatis sed ut ipsum. In tempor ornare nisl, eget gravida magna sagittis eu. Aliquam ut eros vel ipsum accumsan maximus.',
  },
]