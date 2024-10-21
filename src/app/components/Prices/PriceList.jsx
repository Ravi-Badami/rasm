const PriceList = ({ name, desc, price }) => {
  return (
    <div className='flex justify-between text-black '>
      <div className='flex-col'>
        <p className='font-bold text-xl mb-1'>{name}</p>
        <p className=' mb-4'>{desc}</p>
      </div>
      <div>{price}</div>
    </div>
  );
};

export default PriceList;
