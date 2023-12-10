<template>
  <default-layout>
    <div class="page-wrapper">
        
      <main class="main">
        <nav aria-label="breadcrumb" class="breadcrumb-nav border-0 mb-0">
        <div class="container d-flex align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Products</a></li>
                <li class="breadcrumb-item active" aria-current="page">Default</li>
            </ol>
        </div><!-- End .container -->
        </nav><!-- End .breadcrumb-nav -->

        <div class="page-content">
          <div class="container">
            <div class="product-details-top">
                <div class="row">
                    <div class="col-md-6">
                        <div class="product-gallery product-gallery-vertical">
                            <div class="row" v-if="isCD">
                                <figure class="product-main-image">
                                    <img id="product-zoom" :src="product.coverImg" :data-zoom-image="product.coverImg" alt="product image">

                                    <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                                        <i class="icon-arrows"></i>
                                    </a>
                                </figure><!-- End .product-main-image -->
                                
                                <div v-for="(image, index) in product.coverImg" :key="index" id="product-zoom-gallery" class="product-image-gallery">
                                    <a class="product-gallery-item active" href="#" data-image="assets/images/products/single/1.jpg" data-zoom-image="assets/images/products/single/1-big.jpg">
                                        <img :src="image" alt="product side">
                                    </a>
                                </div><!-- End .product-image-gallery -->
                            </div><!-- End .row -->
                            <div class="row" v-if="isBook || isVG">
                                <figure class="product-main-image">
                                    <img id="product-zoom" :src="product.coverImg" :data-zoom-image="product.coverImg" alt="product image">

                                    <a href="#" id="btn-product-gallery" class="btn-product-gallery">
                                        <i class="icon-arrows"></i>
                                    </a>
                                </figure><!-- End .product-main-image -->
                            </div><!-- End .row -->
                        </div><!-- End .product-gallery -->
                    </div><!-- End .col-md-6 -->

                    <div class="col-md-6">
                        <div class="product-details">
                            <h1 class="product-title">{{ product.title }}</h1><!-- End .product-title -->

                            <div class="ratings-container">
                                <div class="ratings">
                                  <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
                                </div><!-- End .ratings -->
                                <!-- <a class="ratings-text" href="#product-review-link" id="review-link">( {{ product.review.length }} Recensioni )</a> -->
                            </div><!-- End .rating-container -->

                            <div class="product-price">
                              <span v-if="product.discount">OFFERTA: <span class="strike">Was {{ product.price }} €</span><strong>NOW {{ discountedPrice(product.price, product.discount) }} €</strong></span>
                              <span v-else>Prezzo: {{ product.price }} €</span>
                            </div><!-- End .product-price -->

                            <div class="product-content">
                                <p>{{ product.description }}</p>
                            </div><!-- End .product-content -->

                            <div>
                              <p v-if="available">Disponibilità immediata</p>
                              <p v-else>Prodotto attualmente non disponibile</p>
                            </div>

                            <div class="details-filter-row details-row-size">
                                <label for="qty">Qty:</label>
                                <div class="product-details-quantity">
                                    <input type="number" id="qty" class="form-control" min="1" :max="product.availableQuantity" step="1" data-decimals="0" required v-model="product.quantity">
                                </div><!-- End .product-details-quantity -->
                            </div><!-- End .details-filter-row -->

                            <div class="product-details-action">
                                <a href="#" class="btn-product btn-cart" @click="addItemToCart(product)"><span>Aggiungi al carrello</span></a>

                                <div class="details-action-wrapper">
                                    <a href="#" class="btn-product btn-wishlist" title="Wishlist"><span>Aggiungi alla Wishlist</span></a>
                                </div><!-- End .details-action-wrapper -->
                            </div><!-- End .product-details-action -->

                            <div class="product-details-footer">
                                <div class="social-icons social-icons-sm">
                                    <span class="social-label">Share:</span>
                                    <a href="#" class="social-icon" title="Facebook" target="_blank"><i class="fa-brands fa-facebook"></i></a>
                                    <a href="#" class="social-icon" title="Twitter" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                                    <a href="#" class="social-icon" title="Instagram" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                                    <a href="#" class="social-icon" title="Pinterest" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
                                </div>
                            </div><!-- End .product-details-footer -->
                        </div><!-- End .product-details -->
                    </div><!-- End .col-md-6 -->
                </div><!-- End .row -->
            </div><!-- End .product-details-top -->

            <div class="product-details-tab">
              <ul class="nav nav-pills justify-content-center" role="tablist">
                <li class="nav-item">
                  <a class="nav-link" @click="activateTab('product-desc-tab')" :class="{ 'active': activeTab === 'product-desc-tab' }">Descrizione</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="activateTab('product-info-tab')" :class="{ 'active': activeTab === 'product-info-tab' }">Altre Informazioni</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="activateTab('product-shipping-tab')" :class="{ 'active': activeTab === 'product-shipping-tab' }">Resi & Spedizioni</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" @click="activateTab('product-review-tab')" :class="{ 'active': activeTab === 'product-review-tab' }">Recensioni (2)</a>
                </li>
              </ul>
                <div class="tab-content">
                    <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'product-desc-tab', 'active': activeTab === 'product-desc-tab' }" id="product-desc-tab" role="tabpanel">
                        <div class="product-desc-content">
                            <h3>Informazioni prodotto</h3>
                            <p>{{ product.description }}</p>
                            <p v-if="isBook || isVG">Brand: {{ product.brand }}</p>
                            <p v-if="isCD">Produttore: {{ product.producer }}</p>
                            <p>
                              <table v-if="isBook">
                                <tbody>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Autore</td>
                                    <td>{{ detail.author }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Editore</td>
                                    <td>{{ detail.editor }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Lingua</td>
                                    <td>{{ detail.language }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Cover</td>
                                    <td>{{ detail.cover }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Pagine</td>
                                    <td>{{ detail.pages }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Pubblicato il</td>
                                    <td>{{ detail.publishedAt }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Dimensioni</td>
                                    <td>{{ detail.size }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Peso</td>
                                    <td>{{ detail.weight }}</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                              <table v-if="isVG">
                                <tbody>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Autore</td>
                                    <td>{{ detail.author }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Piattaforma</td>
                                    <td>{{ detail.platform }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>PEGI</td>
                                    <td>{{ detail.pegi }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Lingua</td>
                                    <td>{{ detail.language }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Pubblicato il</td>
                                    <td>{{ detail.publishedAt }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Dimensioni</td>
                                    <td>{{ detail.size }}</td>
                                  </tr>
                                  <tr v-for="(detail, i) in product.details" :key="i">
                                    <td>Peso</td>
                                    <td>{{ detail.weight }}</td>
                                  </tr>
                                </tbody>
                              </table>
                            
                              <table v-if="isCD">
                                <tr v-for="(detail, i) in product.details" :key="i">
                                  <td>Compositore:</td>
                                  <td>{{ detail.composer }}</td>
                                </tr>
                                <tr v-for="(detail, i) in product.details" :key="i">
                                  <td>Pubblicato il:</td>
                                  <td>{{ detail.publishedAt }}</td>
                                </tr>
                                <tr v-for="(detail, i) in product.details" :key="i">
                                  <td>Dimensioni:</td>
                                  <td>{{ detail.size }}</td>
                                </tr>
                                <tr v-for="(detail, i) in product.details" :key="i">
                                  <td>Peso:</td>
                                  <td>{{ detail.weight }}</td>
                                </tr>
                                <tr v-for="(detail, i) in product.details" :key="i">
                                  <td>Tracce:</td>
                                  <td>
                                    <ol>
                                      <li v-for="(track, i) in detail.trackList" :key="i">{{ track }}</li>
                                    </ol>
                                  </td>
                                </tr>
                              </table>
                            </p>
                        </div><!-- End .product-desc-content -->
                    </div><!-- .End .tab-pane -->
                    <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'product-info-tab', 'active': activeTab === 'product-info-tab' }" id="product-info-tab" role="tabpanel">
                        <div class="product-desc-content">
                            <h3>Information</h3>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. </p>

                            <h3>Fabric & care</h3>
                            <ul>
                                <li>Faux suede fabric</li>
                                <li>Gold tone metal hoop handles.</li>
                                <li>RI branding</li>
                                <li>Snake print trim interior </li>
                                <li>Adjustable cross body strap</li>
                                <li> Height: 31cm; Width: 32cm; Depth: 12cm; Handle Drop: 61cm</li>
                            </ul>

                            <h3>Size</h3>
                            <p>one size</p>
                        </div><!-- End .product-desc-content -->
                    </div><!-- .End .tab-pane -->
                    <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'product-shipping-tab', 'active': activeTab === 'product-shipping-tab' }" id="product-shipping-tab" role="tabpanel">
                        <div class="product-desc-content">
                            <h3>Delivery & returns</h3>
                            <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our <a href="#">Delivery information</a><br>
                            We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our <a href="#">Returns information</a></p>
                        </div><!-- End .product-desc-content -->
                    </div><!-- .End .tab-pane -->
                    <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'product-review-tab', 'active': activeTab === 'product-review-tab' }" id="product-review-tab" role="tabpanel">
                      <div class="reviews" v-for="(post , i) in product.review" :key="i">
                        <h3>Recensioni ({{ product.review.length }})</h3>
                        <div class="review">
                                <div class="row no-gutters">
                                    <div class="col-1">
                                        <h4><a href="#">{{ post.userName }}</a></h4>
                                        <div class="ratings-container">
                                            <div class="ratings">
                                                <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                            </div><!-- End .ratings -->
                                        </div><!-- End .rating-container -->
                                        <span class="review-date">Aggiungere data al db pe calcolare i giorni dal commento</span>
                                    </div><!-- End .col -->
                                    <div class="col">
                                        <h4>{{ post.valutation }} Stelle</h4>

                                        <div class="review-content">
                                            <p>{{ post.post }}</p>
                                        </div><!-- End .review-content -->

                                        <div class="review-action">
                                            <a href="#"><i class="icon-thumbs-up"></i>Helpful (2)</a>
                                            <a href="#"><i class="icon-thumbs-down"></i>Unhelpful (0)</a>
                                        </div><!-- End .review-action -->
                                    </div><!-- End .col-auto -->
                                </div><!-- End .row -->
                            </div><!-- End .review -->
                      </div><!-- End .reviews -->
                    </div><!-- .End .tab-pane -->
                </div><!-- End .tab-content -->
            </div><!-- End .product-details-tab -->
            <div>
              <textarea v-model="text" name="" id="" cols="30" rows="10" placeholder="Aggiungere possibilità di commentare se si effettua l'accesso"></textarea>
                    
              <input v-model="rating" type="number" min="1" max="5">
                    
              <button @click="save">Invia</button>
            </div>
          </div><!-- End .container -->
        </div><!-- End .page-content -->
      </main><!-- End .main -->

    </div><!-- End .page-wrapper -->


    <!-- Mobile Menu -->
    <div class="mobile-menu-overlay"></div><!-- End .mobil-menu-overlay -->

    <div class="mobile-menu-container">
      <div class="mobile-menu-wrapper">
        <span class="mobile-menu-close"><i class="icon-close"></i></span>

        <form action="#" method="get" class="mobile-search">
            <label for="mobile-search" class="sr-only">Search</label>
            <input type="search" class="form-control" name="mobile-search" id="mobile-search" placeholder="Search in..." required>
            <button class="btn btn-primary" type="submit"><i class="icon-search"></i></button>
        </form>
    
        <nav class="mobile-nav">
        <ul class="mobile-menu">
            <li class="active">
                <a href="index.html">Home</a>

                <ul>
                    <li><a href="index-1.html">01 - furniture store</a></li>
                    <li><a href="index-2.html">02 - furniture store</a></li>
                    <li><a href="index-3.html">03 - electronic store</a></li>
                    <li><a href="index-4.html">04 - electronic store</a></li>
                    <li><a href="index-5.html">05 - fashion store</a></li>
                    <li><a href="index-6.html">06 - fashion store</a></li>
                    <li><a href="index-7.html">07 - fashion store</a></li>
                    <li><a href="index-8.html">08 - fashion store</a></li>
                    <li><a href="index-9.html">09 - fashion store</a></li>
                    <li><a href="index-10.html">10 - shoes store</a></li>
                    <li><a href="index-11.html">11 - furniture simple store</a></li>
                    <li><a href="index-12.html">12 - fashion simple store</a></li>
                    <li><a href="index-13.html">13 - market</a></li>
                    <li><a href="index-14.html">14 - market fullwidth</a></li>
                    <li><a href="index-15.html">15 - lookbook 1</a></li>
                    <li><a href="index-16.html">16 - lookbook 2</a></li>
                    <li><a href="index-17.html">17 - fashion store</a></li>
                    <li><a href="index-18.html">18 - fashion store (with sidebar)</a></li>
                    <li><a href="index-19.html">19 - games store</a></li>
                    <li><a href="index-20.html">20 - book store</a></li>
                    <li><a href="index-21.html">21 - sport store</a></li>
                    <li><a href="index-22.html">22 - tools store</a></li>
                    <li><a href="index-23.html">23 - fashion left navigation store</a></li>
                    <li><a href="index-24.html">24 - extreme sport store</a></li>
                </ul>
            </li>
            <li>
                <a href="category.html">Shop</a>
                <ul>
                    <li><a href="category-list.html">Shop List</a></li>
                    <li><a href="category-2cols.html">Shop Grid 2 Columns</a></li>
                    <li><a href="category.html">Shop Grid 3 Columns</a></li>
                    <li><a href="category-4cols.html">Shop Grid 4 Columns</a></li>
                    <li><a href="category-boxed.html"><span>Shop Boxed No Sidebar<span class="tip tip-hot">Hot</span></span></a></li>
                    <li><a href="category-fullwidth.html">Shop Fullwidth No Sidebar</a></li>
                    <li><a href="product-category-boxed.html">Product Category Boxed</a></li>
                    <li><a href="product-category-fullwidth.html"><span>Product Category Fullwidth<span class="tip tip-new">New</span></span></a></li>
                    <li><a href="cart.html">Cart</a></li>
                    <li><a href="checkout.html">Checkout</a></li>
                    <li><a href="wishlist.html">Wishlist</a></li>
                    <li><a href="#">Lookbook</a></li>
                </ul>
            </li>
            <li>
                <a href="product.html" class="sf-with-ul">Product</a>
                <ul>
                    <li><a href="product.html">Default</a></li>
                    <li><a href="product-centered.html">Centered</a></li>
                    <li><a href="product-extended.html"><span>Extended Info<span class="tip tip-new">New</span></span></a></li>
                    <li><a href="product-gallery.html">Gallery</a></li>
                    <li><a href="product-sticky.html">Sticky Info</a></li>
                    <li><a href="product-sidebar.html">Boxed With Sidebar</a></li>
                    <li><a href="product-fullwidth.html">Full Width</a></li>
                    <li><a href="product-masonry.html">Masonry Sticky Info</a></li>
                </ul>
            </li>
            <li>
                <a href="#">Pages</a>
                <ul>
                    <li>
                        <a href="about.html">About</a>

                        <ul>
                            <li><a href="about.html">About 01</a></li>
                            <li><a href="about-2.html">About 02</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>

                        <ul>
                            <li><a href="contact.html">Contact 01</a></li>
                            <li><a href="contact-2.html">Contact 02</a></li>
                        </ul>
                    </li>
                    <li><a href="login.html">Login</a></li>
                    <li><a href="faq.html">FAQs</a></li>
                    <li><a href="404.html">Error 404</a></li>
                    <li><a href="coming-soon.html">Coming Soon</a></li>
                </ul>
            </li>
            <li>
                <a href="blog.html">Blog</a>

                <ul>
                    <li><a href="blog.html">Classic</a></li>
                    <li><a href="blog-listing.html">Listing</a></li>
                    <li>
                        <a href="#">Grid</a>
                        <ul>
                            <li><a href="blog-grid-2cols.html">Grid 2 columns</a></li>
                            <li><a href="blog-grid-3cols.html">Grid 3 columns</a></li>
                            <li><a href="blog-grid-4cols.html">Grid 4 columns</a></li>
                            <li><a href="blog-grid-sidebar.html">Grid sidebar</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Masonry</a>
                        <ul>
                            <li><a href="blog-masonry-2cols.html">Masonry 2 columns</a></li>
                            <li><a href="blog-masonry-3cols.html">Masonry 3 columns</a></li>
                            <li><a href="blog-masonry-4cols.html">Masonry 4 columns</a></li>
                            <li><a href="blog-masonry-sidebar.html">Masonry sidebar</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Mask</a>
                        <ul>
                            <li><a href="blog-mask-grid.html">Blog mask grid</a></li>
                            <li><a href="blog-mask-masonry.html">Blog mask masonry</a></li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Single Post</a>
                        <ul>
                            <li><a href="single.html">Default with sidebar</a></li>
                            <li><a href="single-fullwidth.html">Fullwidth no sidebar</a></li>
                            <li><a href="single-fullwidth-sidebar.html">Fullwidth with sidebar</a></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="elements-list.html">Elements</a>
                <ul>
                    <li><a href="elements-products.html">Products</a></li>
                    <li><a href="elements-typography.html">Typography</a></li>
                    <li><a href="elements-titles.html">Titles</a></li>
                    <li><a href="elements-banners.html">Banners</a></li>
                    <li><a href="elements-product-category.html">Product Category</a></li>
                    <li><a href="elements-video-banners.html">Video Banners</a></li>
                    <li><a href="elements-buttons.html">Buttons</a></li>
                    <li><a href="elements-accordions.html">Accordions</a></li>
                    <li><a href="elements-tabs.html">Tabs</a></li>
                    <li><a href="elements-testimonials.html">Testimonials</a></li>
                    <li><a href="elements-blog-posts.html">Blog Posts</a></li>
                    <li><a href="elements-portfolio.html">Portfolio</a></li>
                    <li><a href="elements-cta.html">Call to Action</a></li>
                    <li><a href="elements-icon-boxes.html">Icon Boxes</a></li>
                </ul>
            </li>
        </ul>
        </nav><!-- End .mobile-nav -->

        <div class="social-icons">
            <a href="#" class="social-icon" target="_blank" title="Facebook"><i class="icon-facebook-f"></i></a>
            <a href="#" class="social-icon" target="_blank" title="Twitter"><i class="icon-twitter"></i></a>
            <a href="#" class="social-icon" target="_blank" title="Instagram"><i class="icon-instagram"></i></a>
            <a href="#" class="social-icon" target="_blank" title="Youtube"><i class="icon-youtube"></i></a>
        </div><!-- End .social-icons -->
      </div><!-- End .mobile-menu-wrapper -->
    </div><!-- End .mobile-menu-container -->
 
    <!-- <div 
    class="single-product-container"
    >

      <div class="single-product-top-side">

        <div class="single-product-image" v-if="isBook || isVG">
            <img 
            id="single-img" 
            :src="product.coverImg" alt=""
            @click="showModal = true"
            >
            <modal 
            :showModal="showModal" 
            :image="product.coverImg"
            @close="showModal = false"
            >
            </modal>
        </div>
      
        <div class="single-product-image" v-if="isCD">

          <Carousel 
          id="gallery" 
          :items-to-show="1" 
          :wrap-around="true"
          v-model="currentSlide"
          >
            <Slide 
            v-for="(image, index) in product.coverImg" 
            :key="index"
            id="slide-gallery"
            >
              <img :src="image" alt="">
            </Slide>
          </Carousel>
        
          <Carousel
            id="thumbnails"
            :items-to-show="4"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
          >
            <Slide 
            v-for="image in product.coverImg" 
            :key="image"
            id="slide-thumbnails"
            >
              <img id="image-slide-thumbnails" :src="image" alt="">
            </Slide>
          </Carousel>
        </div>
        
        <div class="single-product-details">
            <div>
              <h2>{{ product.title }}</h2>
              <p v-if="isBook || isVG">Brand: {{ product.brand }}</p>
              <p v-if="isCD">Produttore: {{ product.producer }}</p>
              <div>
                  <span v-if="product.discount">OFFERTA: <span class="strike">Was {{ product.price }} €</span><strong>NOW {{ discountedPrice(product.price, product.discount) }} €</strong></span>
                  <span v-else>Prezzo: {{ product.price }} €</span>
              </div> 
              <star-rating v-model:rating="product.rating" read-only :increment="incrementStar" :star-size="sizeStar"></star-rating>
              <p>{{ product.description }}</p>
            </div>

            <table v-if="isBook">
              <tbody>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Autore</td>
                  <td>{{ detail.author }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Editore</td>
                  <td>{{ detail.editor }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Lingua</td>
                  <td>{{ detail.language }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Cover</td>
                  <td>{{ detail.cover }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Pagine</td>
                  <td>{{ detail.pages }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Pubblicato il</td>
                  <td>{{ detail.publishedAt }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Dimensioni</td>
                  <td>{{ detail.size }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Peso</td>
                  <td>{{ detail.weight }}</td>
                </tr>
              </tbody>
            </table>

            <table v-if="isVG">
              <tbody>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Autore</td>
                  <td>{{ detail.author }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Piattaforma</td>
                  <td>{{ detail.platform }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>PEGI</td>
                  <td>{{ detail.pegi }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Lingua</td>
                  <td>{{ detail.language }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Pubblicato il</td>
                  <td>{{ detail.publishedAt }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Dimensioni</td>
                  <td>{{ detail.size }}</td>
                </tr>
                <tr v-for="(detail, i) in product.details" :key="i">
                  <td>Peso</td>
                  <td>{{ detail.weight }}</td>
                </tr>
              </tbody>
            </table>

            <table v-if="isCD">
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Compositore</td>
                <td>{{ detail.composer }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Pubblicato il</td>
                <td>{{ detail.publishedAt }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Dimensioni</td>
                <td>{{ detail.size }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Peso</td>
                <td>{{ detail.weight }}</td>
              </tr>
              <tr v-for="(detail, i) in product.details" :key="i">
                <td>Tracce</td>
                <td>
                  <ol>
                    <li v-for="(track, i) in detail.trackList" :key="i">{{ track }}</li>
                  </ol>
                </td>
              </tr>
            </table>

            <div v-for="(post, i) in product.review" :key="i">
              {{ post.post }} - valutazione {{ post.valutation }} - {{ post.userName }}
            </div>

            <div>
              <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
                    
              <input v-model="rating" type="number" min="1" max="5">
                    
              <button @click="save">Invia</button>
            </div>
        </div>
      
        <div class="single-product-add-to-cart">
            <div class="single-product-availability">
              <p v-if="available">Disponibilità immediata</p>
              <p v-else>Prodotto attualmente non disponibile</p>
            </div>

            <div class="single-product-add-to-cart-price">
              <div v-if="product.discount">
                Prezzo: {{ discountedPrice(product.price, product.discount) }} €
              </div>
              <div v-else>Prezzo: {{ product.price }} €</div>
              <div>
                <input 
                type="number"
                v-model="product.quantity"
                min="1"
                :max="product.availableQuantity"
                >
              </div>
            </div>

            <div class="single-product-button">
          
              <button @click="addItemToCart(product)">Aggiungi al carrello</button>
              <button @click="toCheckout">Acquista ora</button>
           
            </div>
        </div>

      </div>

    </div> -->

  </default-layout>
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import DefaultLayout from '../layouts/DefaultLayout.vue';
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import Modal from '../components/Modal.vue';
import { useCartStore } from '../stores/cartStore';
import { useSubCartStore } from '../stores/subCartStore';
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { collection, getDocs, query, where, onSnapshot, doc, getDoc, updateDoc, limit, startAfter } from "firebase/firestore";
import { db } from '../firebase/init'
import { useAuthStore } from "../stores/authStore";
import StarRating from 'vue-star-rating'

export default {
  extends: Carousel,
  components: {
    DefaultLayout,
    // MainSectionLayout,
    Carousel,
    Slide,
    Navigation,
    Modal,
    StarRating
  },
  props: {
    id: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      cartStore: useCartStore(),
      subCartStore: useSubCartStore(),
      getDataFromDB: useGetDataFromDB(),
      authStore: useAuthStore(),
      // product: [],
      tableDataForBook: [],
      tableDataForCD: [],
      currentImg: "",
      currentSlide: 0,
      showModal: false,

      incrementStar: 0.1,
      sizeStar: 15,

      text: '',
      rating: 1,
      activeTab : 'product-desc-tab'
    };
  },
  computed: {
    isBook() {
        return this.getDataFromDB.singleProduct.type == 'book';
    },
    isCD() {
        return this.getDataFromDB.singleProduct.type == 'cd'
    },
    isVG() {
        return this.getDataFromDB.singleProduct.type == 'vg'
    },
    product() {
      const product = this.getDataFromDB.singleProduct;
      if (product) {
        
        product.quantity = 1;
      }
      return product;   
    },
    available(){
      return this.product.availableQuantity > 0
    },
  },
  methods: {
    activateTab(tabId) {
      this.activeTab = tabId;
    },
    addItemToCart() {
      if(this.available){
        this.cartStore.addToCart(this.product);
        this.product.quantity = 1;
        console.log("prodotto aggiunto al carrello")
      } else {
        this.subCartStore.addToSubCart(this.product)
        console.log("prodotto non disponibile, sarà salvato per dopo")
      }
    },
    selectImg(index) {
      this.currentImg = this.product.coverImg[index]
    },
    discountedPrice(oldPrice, discount) {
        const finalPrice = oldPrice - (oldPrice * (discount / 100))
        return finalPrice.toFixed(2)
    },
    // slideTo(val){
    //   this.currentSlide = val
    // },
    toCheckout() {
      const product = this.product

      console.log('product:', product);

      this.$router.push({
        path: '/checkout',
        query: {
          product: JSON.stringify(product),
        }
      })
      
    },
    async save(){
      const productRef = doc(db, "Products", this.id)
      const productDoc = await getDoc(productRef);
          
      if (productDoc.exists()) {
        // Ottieni i dati attuali del prodotto
        const productData = productDoc.data()
        
        // Aggiungi la valutazione all'array 'ratingsValue'
        productData.ratingsValue.push(this.rating)
        // Calcola la nuova media delle valutazioni
        const totalRatings = productData.ratingsValue.length;
        const newAverageRating =
          productData.ratingsValue.reduce((acc, rating) => acc + rating, 0) / totalRatings
        // Aggiorna il campo 'rating' nel documento del prodotto
        productData.rating = newAverageRating
        // Aggiungi la recensione all'array 'review'
        productData.review.push({
          userId: this.authStore.user.id,
          post: this.text,
          valutation: this.rating,
          createdAt: new Date().toISOString(),
        });
      
        // Aggiorna il documento del prodotto nel database
        await updateDoc(productRef, productData);
      } else {
        console.error(`Il prodotto con ID ${productId} non esiste.`);
      }

      this.text = '',
      this.rating = 1
    }
      
  },
  watch: {
    id(newId) {
      this.getDataFromDB.getProductById(newId)
    }
  },
  mounted() {
  this.getDataFromDB.getProductById(this.id)
  },
}
</script>


<style lang="scss" scoped>
/*
.single-product-container{
  width: 100%;
  background-color: white;

  .single-product-top-side{
    width: 100%;
    display: flex; 

    .single-product-image{
      width: 30%;
      min-width: 300px;
      height: 350px;

      #single-img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      #gallery{
        width: 100%;

        #slide-gallery{
          width: 300px;
          height: 350px;
          margin-left: 5px;

          img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            padding: 40px;
          }
        }
      }

      #thumbnails{
        width: 100%;

        #slide-thumbnails{

          #image-slide-thumbnails{
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
      }
    }

    .single-product-details{
      width: 100%;
      min-width: 400px;
      padding: 10px;
    }

    .single-product-add-to-cart{
      width: 300px;
      min-width: 170px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      .single-product-availability{
        text-align: center;
      }

      .single-product-add-to-cart-price{
        display: flex;
        justify-content: space-between;
      }

      .single-product-button{
        display: flex;
        flex-direction: column;

        button{
          margin: 10px 0 10px 0;
        }
      }
    }
  }
}  

.strike{
  text-decoration: line-through;
}
*/
/*** Table Styles **/
/*
table{
  width: 100%;
}
tbody{
  
}
tr{
  
  
}

td{
 
  
}

tr:hover td {
  background:#4E5066;
  color:#FFFFFF;
  border-top: 1px solid #22262e;
}
 
tr:first-child {
  border-top:none;
}

tr:last-child {
  border-bottom:none;
}
 
tr:nth-child(odd) td {
  background:#EBEBEB;
}
 
tr:nth-child(odd):hover td {
  background:#4E5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius:3px;
}
 
tr:last-child td:last-child {
  border-bottom-right-radius:3px;
}

td:last-child {
  border-right: 0px;
}
*/
</style>
