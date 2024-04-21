const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {

    const handleClick = () => {
        console.log("Clicked on shoe:", imgURL);
        console.log("Current bigShoeImg:", bigShoeImg);
    
        if (bigShoeImg !== imgURL.bigShoe) {
            console.log("Updating bigShoeImg to:", imgURL.bigShoe);
            changeBigShoeImage(imgURL); // Change here
        }
    }
    

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`} onClick={handleClick} >

    <div className="flex justify-center items-center border-2 bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img src={imgURL.thumbnail} alt="shoe collecttion" width={127} height={103} className="object-contain" />
    </div>

    </div>
  )
}

export default ShoeCard