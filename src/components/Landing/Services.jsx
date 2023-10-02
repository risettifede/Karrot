const Services = () => {
  return (
    <div className='py-2 mt-2'>
      <div className='py-2 mb-2 '>
        <h2
          className='text-center text-celeste uppercase self-center text-2xl mx-auto mt-10 mb-4 
          md:text-4xl 
          lg:text-3xl lg:mt-10 lg:mb-10
          xl:text-5xl xl:mt-12
          xxl:mt-10 xxl:mb-8
          xxxl:text-3xl'
        >
          Services
        </h2>
        <div className='mx-auto max-w-7xl px-12'>
          <div
            className='grid grid-cols-1 gap-4 
        lg:grid-cols-2
        xxxl:grid-cols-2  
        xxxl:gap-12'
          >
            <div className='rounded-xl bg-pink py-10 text-center shadow-xl'>
              <div className='mx-auto px-8 lg:px-5'>
                <p className='font-bold text-xl mx-auto text-white'>
                  DISCOVERY AND SCOPING
                </p>
                <p
                  className='mt-6 font-bold text-white text-[13px] leading-5 font-mont
              lg:text-[15px]
              xl:text-[17px]
              xxl:text-[17px]'
                >
                  We define and understand the flow of the whole ecosystem,
                  including how users earn points, coins, NFTs, and tokens. We
                  also understand how these variables relate to each other and
                  to the &quot;real economy&quot; if applied. We look at similar
                  released projects to understand what worked and what
                  didn&apos;t. We define and develop the dynamic of the system.
                </p>
              </div>
            </div>
            <div className='rounded-xl bg-pink py-10 text-center shadow-xl'>
              <div className='mx-auto max-w-md px-8'>
                <p className='font-bold text-xl mx-auto text-white'>MATH</p>
                <p
                  className='mt-6 font-mont font-bold text-white text-[13px] leading-5 lg:text-[15px]
              xl:text-[17px]'
                >
                  We develop the whole system mathematically and put numbers to
                  all the dynamics of the game. We determine the probabilities
                  of generating a certain resource, the emission and burning of
                  resources both &quot;in-game&quot; and &quot;on- chain,&quot;
                  etc.
                </p>
              </div>
            </div>
            <div className='rounded-xl bg-pink py-10 text-center shadow-xl'>
              <div className='mx-auto max-w-md px-8'>
                <p className='font-bold  text-xl mx-auto text-white'>
                  DIFFICULTY
                </p>
                <p
                  className='mt-6 font-bold text-white font-mont text-[13px] leading-5 lg:text-[15px]
              xl:text-[17px]'
                >
                  We define probabilities and &quot;difficulty&quot; of the game
                  project. For example, we determine how often we want a user to
                  generate a certain amount of tokens, how often we want them to
                  be able to get money into the real economy, and how often we
                  want a player to level up and what they need to do so.
                </p>
              </div>
            </div>
            <div className='rounded-xl bg-pink py-10 text-center shadow-xl'>
              <div className='mx-auto max-w-md px-8'>
                <p className='font-bold text-xl mx-auto text-white'>
                  BALANCING
                </p>
                <p
                  className='mt-6 font-bold text-white font-mont text-[13px] leading-5 lg:text-[15px]
              xl:text-[17px]'
                >
                  We test the mathematics and incentives to ensure they are in
                  line with what we want the users to do. Although the
                  mathematics were previously made for it, we always do
                  empirical tests with the economy implemented to discover
                  possible exploits. After tests are done and analyzed, we
                  rebalance to adjust any numbers that were causing problems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
