const Services = () => {
  return (
    <div className='bg-white py-20 mt-10'>
      <div className='mx-auto max-w-7xl px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <div
            className='rounded-xl bg-pink py-10 text-center shadow-xl
          xl:-px-1
          '
          >
            <div
              className='mx-auto max-w-xs px-8
            lg:px-5
            
             bg-red-400
            '
            >
              <p className='font-bold text-xl mx-auto'>DISCOVERY AND SCOPING</p>
              <p
                className='mt-2 text-[13px] leading-5 
              lg:text-[15px]
              xl:text-[17px]
              xxl:text-[20px] 
              '
              >
                We define and understand the flow of the whole ecosystem,
                including how users earn points, coins, NFTs, and tokens. We
                also understand how these variables relate to each other and to
                the &quot;real economy&quot; if applied. We look at similar
                released projects to understand what worked and what
                didn&apos;t. We define and develop the dynamic of the system.
              </p>
            </div>
          </div>
          <div className='rounded-xl bg-pink py-10 text-center shadow-xl'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='font-bold text-xl mx-auto'>MATH</p>
              <p
                className='mt-6 text-[13px] leading-5  lg:text-[15px]
              xl:text-[17px]'
              >
                We develop the whole system mathematically and put numbers to
                all the dynamics of the game. We determine the probabilities of
                generating a certain resource, the emission and burning of
                resources both &quot;in-game&quot; and &quot;on- chain,&quot;
                etc.
              </p>
            </div>
          </div>
          <div className='rounded-xl bg-pink py-10 text-center shadow-xl'>
            <div className='mx-auto max-w-xs px-8'>
              <p className='font-bold  text-xl mx-auto'>DIFFICULTY</p>
              <p
                className='mt-6 text-[13px] leading-5 lg:text-[15px]
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
            <div className='mx-auto max-w-xs px-8'>
              <p className='font-bold text-xl mx-auto'>BALANCING</p>
              <p
                className='mt-6 text-[13px] leading-5 lg:text-[15px]
              xl:text-[17px]'
              >
                We test the mathematics and incentives to ensure they are in
                line with what we want the users to do. Although the mathematics
                were previously made for it, we always do empirical tests with
                the economy implemented to discover possible exploits. After
                tests are done and analyzed, we rebalance to adjust any numbers
                that were causing problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
