'use client'
import { motion } from 'motion/react'
import { SiYoutubemusic } from 'react-icons/si';


export default function PricingCard() {

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$9',
      description: 'Perfect for individuals starting out.',
      features: ['1 Project', 'Basic Analytics', 'Community Support'],
      benefits: ['Access to community forums', 'Weekly newsletter'],
      isPopular: false,
    },
    {
      name: 'Pro',
      price: '$29',
      description: 'Ideal for growing teams and professionals.',
      features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'Custom Domains'],
      benefits: ['Priority email support', 'Early access to new features'],
      isPopular: true,
    },


    {
      name: 'Enterprise',
      price: '$99',
      description: 'Advanced features for large organizations.',
      features: ['Everything in Pro', 'Dedicated Account Manager', 'SLA Guarantees', 'Custom Integrations'],
      benefits: ['24/7 phone support', 'On-site training sessions'],
      isPopular: false,
    },
  ];

  console.log(pricingPlans)


  return (
    <div className='min-h-screen max-w-7xl mx-auto'>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        className="mt-10 flex flex-col items-center gap-2 text-center"
      >
        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
          }}
          className="text-3xl font-semibold tracking-tight text-neutral-900"
        >
          Select the Subscription Plan
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: "easeOut" },
            },
          }}
          className="max-w-md text-neutral-600"
        >
          Choose the plan that best fits your needs.
        </motion.p>
      </motion.div>



      <div className=''>



        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 max-w-7xl mx-auto px-4'>
          {
            pricingPlans.map((subscriptionPlan) => (
              <motion.div
                whileHover={{
                  scale: 1.05,
                  cursor: 'pointer',
                  border: '2px solid blue',
                  transition: {
                    duration: 0.2,
                    ease: 'easeInOut',
                  },
                }}

                key={subscriptionPlan.name} className={`relative bg-white text-black border border-gray-300 shadow-lg px-6 py-6 min-h-[60vh] rounded-sm ${subscriptionPlan.isPopular ? 'border-2 border-red-500' : ''}`} >
                <div className='absolute -top-2 right-10'>
                  {subscriptionPlan.isPopular && (
                    <span className='bg-red-500 text-white px-2 py-1 rounded-sm'>Popular</span>
                  )}
                </div>
                <div className='text-3xl font-bold text-center py-4'>{subscriptionPlan.name}</div>
                <div className='text-lg text-gray-500 font-medium text-center mt-2'>{subscriptionPlan.description}</div>
                <div className='text-4xl font-bold text-center my-4'>
                  ₹{subscriptionPlan.price}
                  <span className='text-lg font-normal text-gray-500'>/month</span>
                </div>

                <div className='text-lg text-gray-500 font-medium mt-10'>

                  <h1 className="text-lg font-bold text-center">Benefits:</h1>

                  {
                    subscriptionPlan.benefits.map((benefit) => (
                      <div key={benefit} className='text-sm'>{benefit}</div>
                    ))
                  }
                </div>

                {/* Button Section for Choose plan */}
                <div className='my-6'>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-sm w-full mt-4'>Choose Plan</button>
                </div>

                <div className='text-lg text-black font-bold mt-4'>Premium benefits:</div>

                <div className='text-lg text-gray-500 font-medium space-y-2'>
                  {subscriptionPlan.features.map((feature) => (
                    <div key={feature} className='flex space-x-3 '>
                      <div className='rounded-full border-green-500 border-2 p-1 w-4 h-4 flex items-center justify-center'>
                        <YesSymbol />
                      </div>
                      <div className='text-sm'>{feature}</div>
                    </div>
                  ))}
                </div>





              </motion.div>
            ))
          }
        </div>



      </div>
    </div >
  )
}


const YesSymbol = () => {
  return <div className='flex items-center gap-2'>
    <div className='text-green-500'>
      <SiYoutubemusic />
    </div>
  </div>
}