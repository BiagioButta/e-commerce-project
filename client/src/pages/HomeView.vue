<template>
  <default-layout>
    <div class="page-wrapper">
        <main class="main mt-2">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-9 col-xxl-8 offset-lg-3 offset-xxl-2">
                      
                        <div class="intro-slider-container slider-container-ratio mb-2">
                            <h1 class="text-center">Banner1</h1>
                        </div><!-- End .intro-slider-container -->
                    
                    </div><!-- End .col-xl-9 col-xxl-10 -->
                    
                    <div class="col-xl-3 col-xxl-2 d-none d-xxl-block">
                        <div class="banner banner-overlay  banner-content-stretch">
                           <h1>Banner2</h1>
                        </div><!-- End .banner banner-overlay -->
                    </div><!-- End .col-xl-3 col-xxl-2 -->
                </div><!-- End .row -->
            </div><!-- End .container-fluid -->
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xl-9 col-xxl-10">
                        <div class="row">
                            <div class="col-lg-12 col-xxl-4-5col">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="banner banner-overlay">
                                            <h1>Banner3</h1>
                                        </div><!-- End .banner -->
                                    </div><!-- End .col-md-6 -->

                                    <div class="col-md-6">
                                        <div class="banner banner-overlay">
                                           <h1>Banner4</h1>
                                        </div><!-- End .banner banner-overlay -->
                                    </div><!-- End .col-md-6 -->
                                </div><!-- End .row -->
                            </div><!-- End .col-lg-3 col-xxl-4-5col -->

                            <div class="col-12 col-xxl-5col d-none d-xxl-block">
                                <div class="banner banner-overlay">
                                    <h1>banner5</h1>
                                </div><!-- End .banner banner-overlay -->
                            </div><!-- End .col-lg-3 col-xxl-2 -->
                        </div><!-- End .row -->

                        <div class="mb-3"></div><!-- End .mb-3 -->

                        <div class="mb-5"></div><!-- End .mb-5 -->

                        <div class="bg-lighter trending-products">
                            <div class="heading heading-flex mb-3">
                                <div class="heading-left">
                                    <h2 class="title">Trending Today</h2><!-- End .title -->
                                </div><!-- End .heading-left -->

                               <div class="heading-right">
                                    <ul class="nav nav-pills justify-content-center" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="trending-all-link" data-toggle="tab" href="#trending-all-tab" role="tab" aria-controls="trending-all-tab" aria-selected="true">Tutti</a>
                                        </li>
                                        <li v-for="section in sections" :key="section.id" class="nav-item">
                                            <a class="nav-link" id="trending-elec-link" data-toggle="tab" href="#trending-elec-tab" role="tab" aria-controls="trending-elec-tab" aria-selected="false">{{ section.title }}</a>
                                        </li>
                                    </ul>
                               </div>
                            </div>

                            <div class="tab-content tab-content-carousel">
                                <div class="tab-pane p-0 fade show active" id="trending-all-tab" role="tabpanel" aria-labelledby="trending-all-link">
                                    <div class="owl-carousel d-flex owl-simple carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                        data-owl-options='{
                                            "nav": false, 
                                            "dots": true,
                                            "margin": 20,
                                            "loop": false,
                                            "responsive": {
                                                "0": {
                                                    "items":1
                                                },
                                                "480": {
                                                    "items":2
                                                },
                                                "768": {
                                                    "items":3
                                                },
                                                "992": {
                                                    "items":4
                                                },
                                                "1200": {
                                                    "items":3,
                                                    "nav": true
                                                },
                                                "1600": {
                                                    "items":5,
                                                    "nav": true
                                                }
                                            }
                                        }'>
                                        <div v-for="p in 6" :key="p.id" class="product text-center">
                                            <figure class="product-media">
                                                <span class="product-label label-sale">Sale</span>
                                                <a href="product.html">
                                                    <img src="../assets/image/71ss90e1+ML._SY466_.jpg" alt="Product image" class="product-image">
                                                </a>

                                                <div class="product-action-vertical">
                                                    <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                    <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                                </div><!-- End .product-action-vertical -->

                                                <div class="product-action">
                                                    <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                                </div><!-- End .product-action -->
                                            </figure><!-- End .product-media -->

                                            <div class="product-body">
                                                <h3 class="product-title"><a href="product.html">Berserk (Vol. 1)</a></h3><!-- End .product-title -->
                                                <div class="product-price">
                                                    <span class="new-price">$251.99</span>
                                                    <span class="old-price">Was $290.00</span>
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 2 Reviews )</span>
                                                </div><!-- End .rating-container -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .product -->
                                    </div><!-- End .owl-carousel -->
                                </div><!-- .End .tab-pane -->
                            </div><!-- End .tab-content -->
                        </div><!-- End .bg-lighter -->

                        <div class="mb-5"></div><!-- End .mb-5 -->

                        <div class="row cat-banner-row electronics">
                            <div class="col-xl-3 col-xxl-4">
                                <div class="cat-banner row no-gutters">
                                    <div class="col-sm-6 col-xl-12 col-xxl-6">
                                        <div class="banner banner-overlay">
                                            <h4>Section Banner</h4>
                                            <div class="banner-content">
                                                <h4 class="banner-subtitle text-white"><a href="#">Best Deals</a></h4><!-- End .banner-subtitle -->
                                                <h3 class="banner-title text-white"><a href="#">Canon EOS <br>Mega Sale <br><span>Up To 20% Off</span></a></h3><!-- End .banner-title -->
                                                <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
                                            </div><!-- End .banner-content -->
                                        </div><!-- End .banner -->
                                    </div><!-- End .col-sm-6 -->
                                </div><!-- End .cat-banner -->
                            </div><!-- End .col-xl-3 -->

                            <div class="col-xl-9 col-xxl-8">
                                <div class="owl-carousel d-flex owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                    data-owl-options='{
                                        "nav": true, 
                                        "dots": false,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            },
                                            "992": {
                                                "items":4
                                            },
                                            "1200": {
                                                "items":3
                                            },
                                            "1600": {
                                                "items":4
                                            }
                                        }
                                    }'>
                                    <div v-for="p in 4" :key="p.id" class="product text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-top">Top</span>
                                            <a href="product.html">
                                                <img src="../assets/image/71ss90e1+ML._SY466_.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div><!-- End .product-action-vertical -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div><!-- End .product-action -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <h3 class="product-title"><a href="product.html">Berserk (Vol. 1)</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $1,199.99
                                            </div><!-- End .product-price -->
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 4 Reviews )</span>
                                            </div><!-- End .rating-container -->
                                        </div><!-- End .product-body -->
                                    </div><!-- End .product -->
                                </div><!-- End .owl-carousel -->
                            </div><!-- End .col-xl-9 -->
                        </div><!-- End .row cat-banner-row -->

                        <div class="mb-3"></div><!-- End .mb-3 -->

                        <div class="row cat-banner-row furniture">
                            <div class="col-xl-3 col-xxl-4">
                                <div class="cat-banner row no-gutters">
                                    <div class="col-sm-6 col-xl-12 col-xxl-6">
                                        <div class="banner banner-overlay">
                                            <h4>Section Banner</h4>
                                            <div class="banner-content">
                                                <h4 class="banner-subtitle text-white"><a href="#">Best Deals</a></h4><!-- End .banner-subtitle -->
                                                <h3 class="banner-title text-white"><a href="#">Furniture Sets <br><span>Up To 30% Off</span></a></h3><!-- End .banner-title -->
                                                <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
                                            </div><!-- End .banner-content -->
                                        </div><!-- End .banner -->
                                    </div><!-- End .col-sm-6 -->
                                </div><!-- End .cat-banner -->
                            </div><!-- End .col-xl-3 -->

                            <div class="col-xl-9 col-xxl-8">
                                <div class="owl-carousel d-flex owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                    data-owl-options='{
                                        "nav": true, 
                                        "dots": false,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            },
                                            "992": {
                                                "items":4
                                            },
                                            "1200": {
                                                "items":3
                                            },
                                            "1600": {
                                                "items":4
                                            }
                                        }
                                    }'>
                                    <div v-for="p in 5" :key="p.id" class="product text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-new">New</span>
                                            <a href="product.html">
                                                <img src="../assets/image/71ss90e1+ML._SY466_.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div><!-- End .product-action-vertical -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div><!-- End .product-action -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <h3 class="product-title"><a href="product.html">Berserk (Vol. 1)</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $299.99
                                            </div><!-- End .product-price -->
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 12 Reviews )</span>
                                            </div><!-- End .rating-container -->
                                        </div><!-- End .product-body -->
                                    </div><!-- End .product -->
                                </div><!-- End .owl-carousel -->
                            </div><!-- End .col-xl-9 -->
                        </div><!-- End .row cat-banner-row -->

                        <div class="mb-3"></div><!-- End .mb-3 -->

                        <div class="row">
                            <div class="col-md-6">
                                <div class="banner banner-overlay">
                                    <h1>banner11</h1>
                                </div><!-- End .banner -->
                            </div><!-- End .col-md-6 -->

                            <div class="col-md-6">
                                <div class="banner banner-overlay">
                                   <h1>banner10</h1>
                                </div><!-- End .banner banner-overlay -->
                            </div><!-- End .col-md-6 -->
                        </div><!-- End .row -->

                        <div class="mb-3"></div><!-- End .mb-3 -->

                        <div class="row cat-banner-row clothing">
                            <div class="col-xl-3 col-xxl-4">
                                <div class="cat-banner row no-gutters">
                                    <div class="col-sm-6 col-xl-12 col-xxl-6">
                                        <div class="banner banner-overlay">
                                            <h4>Section Banner</h4>
                                            <div class="banner-content">
                                                <h4 class="banner-subtitle text-white"><a href="#">Best Deals</a></h4><!-- End .banner-subtitle -->
                                                <h3 class="banner-title text-white"><a href="#">Canon EOS <br>Mega Sale <br><span>Up To 20% Off</span></a></h3><!-- End .banner-title -->
                                                <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
                                            </div><!-- End .banner-content -->
                                        </div><!-- End .banner -->
                                    </div><!-- End .col-sm-6 -->
                                </div><!-- End .cat-banner -->
                            </div><!-- End .col-xl-3 -->

                            <div class="col-xl-9 col-xxl-8">
                                <div class="owl-carousel d-flex owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                    data-owl-options='{
                                        "nav": true, 
                                        "dots": false,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            },
                                            "992": {
                                                "items":4
                                            },
                                            "1200": {
                                                "items":3
                                            },
                                            "1600": {
                                                "items":4
                                            }
                                        }
                                    }'>
                                    <div v-for="p in 5" :key="p.id" class="product text-center">
                                        <figure class="product-media">
                                            <a href="product.html">
                                                <img src="../assets/image/71ss90e1+ML._SY466_.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div><!-- End .product-action-vertical -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div><!-- End .product-action -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <h3 class="product-title"><a href="product.html">Brserk (Vol. 1)</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                $64.00
                                            </div><!-- End .product-price -->
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 12 Reviews )</span>
                                            </div><!-- End .rating-container -->
                                        </div><!-- End .product-body -->
                                    </div><!-- End .product -->
                                </div><!-- End .owl-carousel -->
                            </div><!-- End .col-xl-9 -->
                        </div><!-- End .row cat-banner-row -->

                        <div class="mb-3"></div><!-- End .mb-3 -->

                        <div class="row cat-banner-row cooking">
                            <div class="col-xl-3 col-xxl-4">
                                <div class="cat-banner row no-gutters">
                                    <div class="col-sm-6 col-xl-12 col-xxl-6">
                                        <div class="banner banner-overlay">
                                            <h4>Section Banner</h4>
                                            <div class="banner-content">
                                                <h4 class="banner-subtitle text-white"><a href="#">Best Deals</a></h4><!-- End .banner-subtitle -->
                                                <h3 class="banner-title text-white"><a href="#">Canon EOS <br>Mega Sale <br><span>Up To 20% Off</span></a></h3><!-- End .banner-title -->
                                                <a href="#" class="banner-link">Shop Now <i class="icon-long-arrow-right"></i></a>
                                            </div><!-- End .banner-content -->
                                        </div><!-- End .banner -->
                                    </div><!-- End .col-sm-6 -->
                                </div><!-- End .cat-banner -->
                            </div><!-- End .col-xl-3 -->

                            <div class="col-xl-9 col-xxl-8">
                                <div class="owl-carousel d-flex owl-full carousel-equal-height carousel-with-shadow" data-toggle="owl" 
                                    data-owl-options='{
                                        "nav": true, 
                                        "dots": false,
                                        "margin": 20,
                                        "loop": false,
                                        "responsive": {
                                            "0": {
                                                "items":2
                                            },
                                            "480": {
                                                "items":2
                                            },
                                            "768": {
                                                "items":3
                                            },
                                            "992": {
                                                "items":4
                                            },
                                            "1200": {
                                                "items":3
                                            },
                                            "1600": {
                                                "items":4
                                            }
                                        }
                                    }'>
                                    <div v-for="p in 5" :key="p.id" class="product text-center">
                                        <figure class="product-media">
                                            <span class="product-label label-sale">Sale</span>
                                            <a href="product.html">
                                                <img src="../assets/image/71ss90e1+ML._SY466_.jpg" alt="Product image" class="product-image">
                                            </a>

                                            <div class="product-action-vertical">
                                                <a href="#" class="btn-product-icon btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <a href="popup/quickView.html" class="btn-product-icon btn-quickview" title="Quick view"><span>Quick view</span></a>
                                            </div><!-- End .product-action-vertical -->

                                            <div class="product-action">
                                                <a href="#" class="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                                            </div><!-- End .product-action -->
                                        </figure><!-- End .product-media -->

                                        <div class="product-body">
                                            <h3 class="product-title"><a href="product.html">Berserk (Vol. 1)</a></h3><!-- End .product-title -->
                                            <div class="product-price">
                                                <span class="new-price">$249.99</span>
                                                <span class="old-price">Was $299.99</span>
                                            </div><!-- End .product-price -->
                                            <div class="ratings-container">
                                                <div class="ratings">
                                                    <div class="ratings-val" style="width: 100%;"></div><!-- End .ratings-val -->
                                                </div><!-- End .ratings -->
                                                <span class="ratings-text">( 7 Reviews )</span>
                                            </div><!-- End .rating-container -->
                                        </div><!-- End .product-body -->
                                    </div><!-- End .product -->
                                </div><!-- End .owl-carousel -->
                            </div><!-- End .col-xl-9 -->
                        </div><!-- End .row cat-banner-row -->

                        <div class="mb-3"></div><!-- End .mb-3 -->

                        <div class="icon-boxes-container">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-sm-6 col-lg-3">
                                        <div class="icon-box icon-box-side">
                                            <span class="icon-box-icon text-dark">
                                                <i class="fa-solid fa-rocket"></i>
                                            </span>
                                            <div class="icon-box-content">
                                                <h3 class="icon-box-title">Spedizione gratuita</h3><!-- End .icon-box-title -->
                                                <p>Su ordini maggiori di 50€</p>
                                            </div><!-- End .icon-box-content -->
                                        </div><!-- End .icon-box -->
                                    </div><!-- End .col-sm-6 col-lg-3 -->

                                    <div class="col-sm-6 col-lg-3">
                                        <div class="icon-box icon-box-side">
                                            <span class="icon-box-icon text-dark">
                                                <i class="fa-solid fa-arrows-rotate"></i>
                                            </span>

                                            <div class="icon-box-content">
                                                <h3 class="icon-box-title">Reso gratuito</h3><!-- End .icon-box-title -->
                                                <p>Entro 30 giorni</p>
                                            </div><!-- End .icon-box-content -->
                                        </div><!-- End .icon-box -->
                                    </div><!-- End .col-sm-6 col-lg-3 -->

                                    <div class="col-sm-6 col-lg-3">
                                        <div class="icon-box icon-box-side">
                                            <span class="icon-box-icon text-dark">
                                                <i class="fa-solid fa-circle-exclamation"></i>
                                            </span>

                                            <div class="icon-box-content">
                                                <h3 class="icon-box-title">20% di sconto sul primo acquisto</h3><!-- End .icon-box-title -->
                                                <p>Dopo esserti registrato</p>
                                            </div><!-- End .icon-box-content -->
                                        </div><!-- End .icon-box -->
                                    </div><!-- End .col-sm-6 col-lg-3 -->

                                    <div class="col-sm-6 col-lg-3">
                                        <div class="icon-box icon-box-side">
                                            <span class="icon-box-icon text-dark">
                                                <i class="fa-regular fa-life-ring"></i>
                                            </span>

                                            <div class="icon-box-content">
                                                <h3 class="icon-box-title">Supporto</h3><!-- End .icon-box-title -->
                                                <p>24/7</p>
                                            </div><!-- End .icon-box-content -->
                                        </div><!-- End .icon-box -->
                                    </div><!-- End .col-sm-6 col-lg-3 -->
                                </div><!-- End .row -->
                            </div><!-- End .container-fluid -->
                        </div><!-- End .icon-boxes-container -->

                        <div class="mb-5"></div><!-- End .mb-5 -->
                    </div><!-- End .col-lg-9 col-xxl-10 -->

                    <aside class="col-xl-3 col-xxl-2 order-xl-first">
                        <div class="sidebar sidebar-home">
                            <div class="row">
                                <div class="col-sm-6 col-xl-12">
                                    <div class="widget widget-banner">
                                        <div class="banner banner-overlay">
                                           <h1>banner6</h1>
                                        </div><!-- End .banner banner-overlay -->
                                    </div><!-- End .widget widget-banner -->
                                </div><!-- End .col-sm-6 col-xl-12 -->

                                <div class="col-sm-6 col-xl-12 mb-2">
                                    <div class="widget widget-products">
                                        <h4 class="widget-title"><span>Bestsellers</span></h4><!-- End .widget-title -->
                                        <slider-best-seller></slider-best-seller>
                                    </div><!-- End .widget widget-products -->
                                </div><!-- End .col-sm-6 col-xl-12 -->
                                
                                <div class="col-12">
                                    <div class="widget widget-deals">
                                        <h4 class="widget-title"><span>Special Offer</span></h4><!-- End .widget-title -->
                                        <slider-best-discount></slider-best-discount>
                                    </div><!-- End .widget widget-deals -->
                                </div><!-- End .col-sm-6 col-lg-xl -->
                                
                                <div class="col-sm-6 col-xl-12">
                                    <div class="widget widget-banner">
                                        <div class="banner banner-overlay">
                                            <h1>banner7</h1>
                                        </div><!-- End .banner banner-overlay -->
                                    </div><!-- End .widget widget-banner -->
                                </div><!-- End .col-sm-6 col-lg-12 -->
                            </div><!-- End .row -->
                        </div><!-- End .sidebar sidebar-home -->
                    </aside><!-- End .col-lg-3 col-xxl-2 -->
                </div><!-- End .row -->
            </div><!-- End .container-fluid -->
        </main><!-- End .main -->
    </div><!-- End .page-wrapper -->

    <div v-if="isLoading" class="loader">Caricamento in corso...</div>

    <div v-else>

      <!-- <div class="slider-home-container">
        <h2>Bestseller</h2>
        <hr>
        <slider-best-seller></slider-best-seller>
      </div> -->

      <!-- <div class="slider-home-container">
        <h2>I più votati</h2>
        <hr>
        <slider-top-rated></slider-top-rated>
      </div> -->
<!-- 
      <div class="slider-home-container">
        <h2>Le migliori offerte del momento</h2>
        <hr>
        <slider-best-discount></slider-best-discount>
      </div> -->
<!-- 
      <div 
      v-if="isLogged && productByUserOrder.length > 0" 
      class="slider-home-container"
      >
        <h2>Acquista di nuovo</h2>
        <hr>
        <slider-buy-again></slider-buy-again>
      </div> -->

    </div>

  </default-layout>
</template>



<script>
import DefaultLayout from '../layouts/DefaultLayout.vue'; 
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import SliderBestSeller from '../components/SliderBestSeller.vue'
import SliderTopRated from '../components/SliderTopRated.vue'
import SliderBestDiscount from '../components/SliderBestDiscount.vue'
import SliderBuyAgain from '../components/SliderBuyAgain.vue';
import { useGetDataFromDB } from '../stores/getDataFromDB';
import { useAuthStore } from '../stores/authStore';

export default {
  components: {
    DefaultLayout,
    // MainSectionLayout,
    SliderBestSeller,
    SliderTopRated,
    SliderBestDiscount,
    SliderBuyAgain
  },
  data() {
    return {
      getDataFromDB: useGetDataFromDB(),
      authStore: useAuthStore(),
      isLoading: true
    }
  },
  computed: {
    isLogged() {
      return this.authStore.user.id !== undefined;
    },
    productByUserOrder() {
        return this.getDataFromDB.productByOrder
    },
    sections() {
        return this.getDataFromDB.sections
    }
  },
  methods: {
   
  },
  async mounted() {
    // this.getDataFromDB.getProductByRating()
    this.getDataFromDB.getProductByDiscount()
    this.getDataFromDB.getProductByNsales()

    // if(this.getDataFromDB.productByOrder.length === 0 && this.isLogged){
    //   await this.getDataFromDB.getProductIdByOrderWithProductData()
    // }

    // const numRandomProducts = 3;
    // const randomProducts = await this.getDataFromDB.getRandomProducts(numRandomProducts);
    
    this.isLoading = false
  }
}

</script>

<style lang="scss" scoped> 

</style>