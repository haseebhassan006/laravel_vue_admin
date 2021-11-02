@extends('layouts.frontend.master')


@section('content')

{{-- @dd(env('FB_CLIENT_ID')) --}}
 <!-- banner-slider -->
    <section class="banner">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="frontend/assets/images/Group241.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <div class="row">
                <div class="col-lg-6 dis-flex-start" data-aos="fade-right" data-aos-duration="2000">
                  <h2>Lorem Ipsum is simply <strong>dummy text</strong></h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                </div>

                <div class="col-lg-6 " data-aos="fade-left" data-aos-duration="2000">
                  <img src="frontend/assets/images/Group 243.png" class="img-fluid" class="img-fluid" alt="">
                </div>
              <location-picker-component></location-picker-component>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="frontend/assets/images/Group241.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <div class="row">
                <div class="col-lg-6 dis-flex-start" data-aos="fade-right" data-aos-duration="2000">
                  <h2>Lorem Ipsum is simply <strong>dummy text</strong></h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                </div>

                <div class="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                  <img src="frontend/assets/images/Group 243.png" class="img-fluid" class="img-fluid" alt="">
                </div>

                {{-- Vue Component --}}
                <location-picker-component></location-picker-component>

              </div>
            </div>
          </div>
          <div class="carousel-item">
            <img src="frontend/assets/images/Group241.png" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <div class="row">
                <div class="col-lg-6 dis-flex-start" data-aos="fade-right" data-aos-duration="2000">
                  <h2>Lorem Ipsum is simply <strong>dummy text</strong></h2>
                  <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.</p>
                </div>

                <div class="col-lg-6" data-aos="fade-left" data-aos-duration="2000">
                  <img src="frontend/assets/images/Group 243.png" class="img-fluid" class="img-fluid" alt="">
                </div>
                <div class="col-lg-12">
                  <location-picker-component></location-picker-component>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
      </div>
    </section>
    <!-- banner-slider -->
    <!-- section-3 -->
    <section class="section-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-4" data-aos="fade-right" data-aos-duration="3000">
            <div class="sec-3-in">
              <div class="media">
                <img class="mr-3" src="frontend/assets/images/Group 172.png" alt="">
                <div class="media-body dis-flex-start">
                  <h5 class="mt-0">Rave Gasoline Service</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-right" data-aos-duration="2000">
            <div class="sec-3-in">
              <div class="media">
                <img class="mr-3" src="frontend/assets/images/section-3-2.png" alt="">
                <div class="media-body dis-flex-start">
                  <h5 class="mt-0">Rave Delivery Service</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4" data-aos="fade-right" data-aos-duration="1000">
            <div class="sec-3-in">
              <div class="media">
                <img class="mr-3" src="frontend/assets/images/section-3-3.png" alt="">
                <div class="media-body dis-flex-start">
                  <h5 class="mt-0">Rave Shop</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- section-3 -->
    <!-- section-4 -->
    <section class="section-4">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="sec-h2" data-aos="fade-right" data-aos-duration="1000"><strong>Why</strong> Choose Rave?</h2>
          </div>
          <div class="row">
            <div class="col-lg-4" data-aos="fade-up" data-aos-duration="1000">
              <div class="sec-4-in text-center">
                <div class="why-img">
                <img src="frontend/assets/images/why-1.png" class="img-fluid" alt="">
                </div>
                <h3 class="sec-h3">We Prioritize Your Safety</h3>
                <p class="sec-p">All of our members are tracked and undergo a thorough background check to guarantee your safety.</p>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-duration="2000">
              <div class="sec-4-in text-center">
                <div class="why-img">
                <img src="frontend/assets/images/why-2.png" class="img-fluid" alt="">
                </div>
                <h3 class="sec-h3">Maintain High Quality Standards</h3>
                <p class="sec-p">Your ratings and feedback help us ensure that you get the best experience with Rave every time.</p>
              </div>
            </div>
            <div class="col-lg-4" data-aos="fade-up" data-aos-duration="3000">
              <div class="sec-4-in text-center">
                <div class="why-img">
                <img src="frontend/assets/images/why-3.png" class="img-fluid" alt="">
                </div>
                <h3 class="sec-h3">Provide Transparent Pricing</h3>
                <p class="sec-p">Our charges have no hidden-costs, we ensure to list out all charges per service used.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section-4 -->
    <!-- section-5 -->
    <section class="section-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="sec-h2" data-aos="zoom-out-down" data-aos-duration="3000">About Rave</h2>
            <img src="frontend/assets/images/Group 229.png" class="img-fluid" alt="" data-aos="zoom-out-down" data-aos-duration="1000">
            <p class="sec-p" data-aos="zoom-out-up" data-aos-duration="1000">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever. when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </div>
    </section>
    <!-- section-5 -->
    <!-- section-6 -->
    <section class="section-6">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="sec-h2" data-aos="zoom-out-up" data-aos-duration="1000">Rave Services</h2>
          </div>
        </div>
        <div class="section-6-inner">
        <div class="row">
            <div class="col-lg-7 p-0" data-aos="fade-right" data-aos-duration="2000">
            <div class="sec-6-in">
              <div class="row">
                <div class="col-lg-8 dis-flex-start">
                  <h3 class="sec-h3">Rave Gasoline</h3>
                  <p class="sec-p">All of our members are tracked and undergo a thorough background check to guarantee your safety.</p>
                  <a href="#" class="sec-8-btn">Order Now</a>
                </div>
                <div class="col-lg-4">
                  <img src="frontend/assets/images/sec-6-1.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5"></div>
          </div>
        </div>
        <div class="section-6-inner">
        <div class="row">
          <div class="col-lg-5"></div>
          <div class="col-lg-7 p-0" data-aos="fade-left" data-aos-duration="2000">
            <div class="sec-6-in">
              <div class="row">
                <div class="col-lg-8 dis-flex-start">
                  <h3 class="sec-h3">Rave Delivery</h3>
                  <p class="sec-p">All of our members are tracked and undergo a thorough background check to guarantee your safety.</p>
                  <a href="#" class="sec-8-btn">Get Delivery</a>
                </div>
                <div class="col-lg-4">
                  <img src="frontend/assets/images/sec-6-2.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
          <div class="section-6-inner">
          <div class="row">
            <div class="col-lg-7 p-0" data-aos="fade-right" data-aos-duration="2000">
            <div class="sec-6-in">
              <div class="row">
                <div class="col-lg-8 dis-flex-start">
                  <h3 class="sec-h3">Rave Shop</h3>
                  <p class="sec-p">All of our members are tracked and undergo a thorough background check to guarantee your safety.</p>
                  <a href="#" class="sec-8-btn">Shop Now</a>
                </div>
                <div class="col-lg-4">
                  <img src="frontend/assets/images/sec-6-3.png" class="img-fluid" alt="">
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5"></div>
          </div>
        </div>
      </div>
    </section>
    <!-- section-6 -->
    <!-- section-7 -->
    <section class="section-7">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="sec-h2" data-aos="zoom-up" data-aos-duration="1000"><strong>Get</strong> Connected With Rave</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 p-0" data-aos="zoom-in-right" data-aos-duration="1000">
            <div class="sec-7-in sec-7-in-1 text-center">
            <h3 class="sec-h3">Become A <strong>Customer / Subscriber</strong></h3>
            <form>
              <label>User Name</label>
              <input type="email" class="form-control" placeholder="Type your username">
              <label>Password</label>
              <input type="email" class="form-control" placeholder="Type your password">
              <button type="submit" class="btn btn-primary">Login</button>
              <p>Or Sign Up Using</p>
              <ul>
                <li><a href="{{route('login.fb')}}"><img src="{{asset('frontend/assets/images/social-1.png')}}" class="img-fluid" alt=""></a></li>
                <li><a href="{{route('login.gmail')}}"><img src="{{asset('frontend/assets/images/social-2.png')}}" class="img-fluid" alt=""></a></li>
              </ul>
            </form>
          </div>
          </div>
          <div class="col-lg-6 p-0" data-aos="zoom-in-left" data-aos-duration="1000">
            <div class="sec-7-in sec-7-in-2 text-center">
            <h3 class="sec-h3">Join As A <strong>Member</strong></h3>
            <form>
              <label>User Name</label>
              <input type="email" class="form-control" placeholder="Type your username">
              <label>Password</label>
              <input type="email" class="form-control" placeholder="Type your password">
              <button type="submit" class="btn btn-primary">Login</button>
              <p>Or</p>
              <button type="submit" class="btn btn-primary">Sign Up</button>
            </form>
          </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section-7 -->
    <!-- section-testy -->
    <section class="shop-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 text-center">
              <h2 class="sec-h2" data-aos="zoom-out-up" data-aos-duration="1000">Gallon Of Gas</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12" data-aos="zoom-out-up" data-aos-duration="2000">
              <div id="gallery">
                <div class="item text-center">
                  <div class="box">
                    <div class="pro-img">
                      <img src="frontend/assets/images/rave-1.png">
                      <div class="add-btnn">
                        <a href="#" class="add-btn">Add To Cart</a>
                      </div>
                    </div>
                    <h3 class="sec-h3">Coffee</h3>
                    <h4>$ 4.00</h4>
                  </div>
                </div>
                <div class="item text-center">
                  <div class="box">
                    <div class="pro-img">
                      <img src="frontend/assets/images/rave-2.png">
                      <div class="add-btnn">
                        <a href="#" class="add-btn">Add To Cart</a>
                      </div>
                    </div>
                    <h3 class="sec-h3">Jumper Cabels</h3>
                    <h4>$ 4.00</h4>
                  </div>
                </div>
                <div class="item text-center">
                  <div class="box">
                    <div class="pro-img">
                      <img src="frontend/assets/images/rave-3.png">
                      <div class="add-btnn">
                        <a href="#" class="add-btn">Add To Cart</a>
                      </div>
                    </div>
                    <h3 class="sec-h3">Gallon Of Gas</h3>
                    <h4>$ 4.00</h4>
                  </div>
                </div>
                <div class="item text-center">
                  <div class="box">
                    <div class="pro-img">
                      <img src="frontend/assets/images/rave-1.png">
                      <div class="add-btnn">
                        <a href="#" class="add-btn">Add To Cart</a>
                      </div>
                    </div>
                    <h3 class="sec-h3">Coffee</h3>
                    <h4>$ 4.00</h4>
                  </div>
                </div>
                <div class="item text-center">
                  <div class="box">
                    <div class="pro-img">
                      <img src="frontend/assets/images/rave-2.png">
                      <div class="add-btnn">
                        <a href="#" class="add-btn">Add To Cart</a>
                      </div>
                    </div>
                    <h3 class="sec-h3">Jumper Cabels</h3>
                    <h4>$ 4.00</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <!-- section-testy -->
    <!-- section-8 -->
    <section>
      <div class="container">
        <div class="row">
          <div class="subscribe-sec">
            <div class="col-lg-12">
              <h2 class="sec-h2">Subscribe To Rave <strong>NewsLetter</strong></h2>
              <p class="sec-p">All of our members are tracked and undergo a thorough.</p>
              <form class="subs-form">
                <div class="first">
                  <input type="email" class="form-control" placeholder="Your Name">
                </div>
                <div class="secound">
                  <input type="email" class="form-control" placeholder="Email Address">
                </div>
                <div class="third">
                  <button type="submit" class="btn btn-primary">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section-8 -->


@endsection
@push('scripts')

@endpush


