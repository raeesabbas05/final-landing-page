const SecHero = () => {
  return (
    <>
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES. YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
          <div className="hero-btn">
            <button>Shop Now</button>
            <button className="secondry-btnn">Category</button>
          </div>
          <div className="shop">
            <p>Also Available On</p>
          </div>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon-logo" />
            <img src="/images/flipkart.png" alt="flipkart-logo" />
          </div>
        </div>
        <div className="hero-image">
          <div className="yellow-circle"></div>
          <img src="/images/shoe.png" alt="shoe" />
        </div>
      </main>
    </>
  );
};

export default SecHero;
