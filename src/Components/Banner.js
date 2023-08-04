import React  ,{ useState }  from 'react'
import '../CSS/Banner.css'
import { Carousel } from 'react-bootstrap';
import Topheader from './Topheader';

const Banner = () => {

    const [pincode, setPincode] = useState('');
    const [occasion, setOccasion] = useState('');
    const [giftType, setGiftType] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handlePincodeChange = (e) => {
      setPincode(e.target.value);
    };
  
    const handleOccasionChange = (e) => {
      setOccasion(e.target.value);
    };
  
    const handleGiftTypeChange = (e) => {
      setGiftType(e.target.value);
    };
  
    const handleSearch = () => {
      if (!occasion || !giftType) {
        setErrorMessage('Select Occasion or Gift Type');
      } else {
        // Handle search logic here
        setErrorMessage('');
      }

    }

    return (
<>


            <Carousel interval={3000} pauseOnHover={false}> {/* Change interval for slide timing */}
                <Carousel.Item className='imgg'>
                    <img
                        className="d-block w-100"
                        src="https://cdn.metro-online.com/-/media/Project/MCW/IN_Metro/Stores-and-Offers/Product-Assortment/DFB/Bakery/Bakery-Hero-img-1392x464.jpg?h=464&iar=0&w=1392&rev=20cd3d9ccad343d5a6781d92bd201232&hash=4090CBF6F791D24E2412417B258ABB84"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Text on Image 1</h3>
                        <p>Description for Image 1</p>
                        <button className="btn btn-primary">Button 1</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='imgg'>
                    <img
                        className="d-block w-100"
                        src="https://c4.wallpaperflare.com/wallpaper/681/930/507/bread-rye-bread-baked-goods-baguette-wallpaper-preview.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Text on Image 2</h3>
                        <p>Description for Image 2</p>
                        <button className="btn btn-primary">Button 2</button>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className='imgg'>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5fGVufDB8fDB8fHww&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Text on Image 3</h3>
                        <p>Description for Image 1</p>
                        <button className="btn btn-primary">Button 1</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='imgg'>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFrZXJ5JTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Text on Image 4</h3>
                        <p>Description for Image 1</p>
                        <button className="btn btn-primary">Button 1</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='imgg'>
                    <img
                        className="d-block w-100"
                        src="https://thumbs.dreamstime.com/b/bakery-bread-wood-background-closeup-variety-baked-food-wooden-table-high-resolution-119166489.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Text on Image 5</h3>
                        <p>Description for Image 1</p>
                        <button className="btn btn-primary">Button 1</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




            {/* main banner cards  */}

<section>
            <div class="webwrapper">
                <div class="top-banners impressionBannerPoc">
                    {/* <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_1">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38mYHSrmLk4eBuFIfM2NfgA5mij_W1PA0cQ&usqp=CAU" alt="Birthday Gifts" /></div></a>
                    </div>
                    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_2">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3B0cxwDdkmivgLp94nGDRUpMWM7HNAMVUig&usqp=CAU" 
                                
                                
                                alt="Anniversary Gifts" /></div></a>
                    </div>


                    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_3">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJ6OQLGHD4nEUNxNy3rHfttoZCUy7jcqhEchK7XCfE0zNTcZbBTH_canf4iRcNALWxpw&usqp=CAU" alt="Congratulations Gifts" /></div></a>
                    </div>
                    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_4">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4">
                                <img src="https://c0.wallpaperflare.com/preview/489/682/388/plant-cake-food-dessert.jpg" alt="Experiential Gifts" /></div></a>
                    </div>

                    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_5">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktCL8p9S6IH2dHIcs4M_SDh_dMhB69pIRMxpnxEUlmziaWxgISMe6ylnsG0ZjBnNiUrQ&usqp=CAU" alt="Gifts for Men" /></div></a>
                    </div>
                    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_6">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4">
                                <img src="https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2018%2F02%2F13%2Fpastries-hero-2000.jpg" alt="Gifts for Men" />
                            </div>
                        </a>
                    </div>
                    <div class="singleCat one_seventh BannerPoc" data-id="desk_top_icon_pos_7">
                        <a href="">
                            <div class="aspectRation col-sm-md-lg-xl-xxl4">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3h9vgUu3eNF9dcdDbQw1m624NJPvJA9_BQuui281DpB_PmujZHY2vxsEcTR6w4JsnSLg&usqp=CAU" alt="Gifts for Her" />
                            </div>
                        </a>
                    </div> */}
                   <Topheader className="col-sm-md-lg-xl-xxl" Image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38mYHSrmLk4eBuFIfM2NfgA5mij_W1PA0cQ&usqp=CAU' alt='01' href=''/>

                   <Topheader  className="col-sm-md-lg-xl-xxl" Image='https://img.freepik.com/premium-photo/vanilla-cupcakes-decorated-fresh-strawberries-delivery-box_116500-26.jpg?w=2000' alt='02' href=''/>
                   <Topheader  className="col-sm-md-lg-xl-xxl"Image='https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg?cs=srgb&dl=pexels-arminas-raudys-808941.jpg&fm=jpg' alt='03' href=''/>

                   <Topheader  className="col-sm-md-lg-xl-xxl" Image='https://img.freepik.com/premium-photo/cupcakes-with-raspberry-cream_73240-491.jpg' alt='04' href=''/>

                   <Topheader className="col-sm-md-lg-xl-xxl" Image='https://watermark.lovepik.com/photo/20211121/large/lovepik-birthday-cake-picture_500654083.jpg' alt='05' href=''/>

                   <Topheader className="col-sm-md-lg-xl-xxl" Image='https://w0.peakpx.com/wallpaper/614/365/HD-wallpaper-food-cake-pastry-still-life-viennoiserie.jpg' alt='06' href=''/>

                   <Topheader className="col-sm-md-lg-xl-xxl-sm-md-lg-xl-xxl" Image='https://static-bebeautiful-in.unileverservices.com/5-of-india-most-popular-chocolate-desserts-600x350-picmobhome.jpg' alt='07' href=''/>



</div>
</div>
</section>





{/* search area   */}

<div className='container-sm-md-lg-xl-xxl mt-4'>

<div className="quick-search">
      <div className="desktopError">{errorMessage}</div>
      <form id="quick-search-form" autoComplete="off">
        <h3 className="quick-search-title">Gift Finder</h3>
        <div className="sec occassions-input pincodeSec">
          <input
            type="text"
            id="QuickSeacrchpincode"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={handlePincodeChange}
          />
          <input type="hidden" id="lastSelectedPincode" />
          <input type="hidden" id="lastSelectedAddress" />
          <div className="pincodeListItems" style={{ display: 'none' }}>
            <ul id="pincodeUL"></ul>
            <span id="dontknow">Don't Know Pincode?</span>
            <span id="dontsee">Don't see your Pincode?</span>
          </div>
        </div>
        <div className="sec occassions-input">
          <input
            type="hidden"
            id="occassionsinput"
            value={occasion}
            onChange={handleOccasionChange}
          />
          <span className="inputs-sec" id="occassions">
            Occasion
            <span className="placeholders">Birthday, Anniversary etc.</span>
          </span>
        </div>
        <div className="sec gift-input">
          <input
            type="hidden"
            id="gifttypeinput"
            value={giftType}
            onChange={handleGiftTypeChange}
          />
          <span className="inputs-sec" id="giftType">
            Gift Type
            <span className="placeholders">Flowers, Cakes, Plants, etc.</span>
          </span>
        </div>
        <div className="sec submit">
          <button type="button" id="quick-search-btn" onClick={handleSearch}>
            Find Gifts
          </button>
        </div>
        <div className="errors-msg">{errorMessage}</div>
      </form>
    </div>


    </div>

  {/* ocassion colum  */}

<section>
    <div className='conatiner-lg-12'>
<div className='text-center cel'>
<h1 class="maincelebration">Celebrate Occasions with India's #1 Bakery</h1>
<p>Cookies are made of butter and love&amp; Free Shipping in India.</p>
</div>

    </div>
</section>









                </>


                )
                }
                export default Banner