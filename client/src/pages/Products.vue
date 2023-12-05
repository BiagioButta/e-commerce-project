<template>
<body>
    <div class="page-wrapper">
        <main class="main">
        	<div class="page-header text-center" style="background-image: url('assets/images/page-header-bg.jpg')">
        		<div class="container">
        			<h1 class="page-title">List<span>Shop</span></h1>
        		</div><!-- End .container -->
        	</div><!-- End .page-header -->
            <nav aria-label="breadcrumb" class="breadcrumb-nav mb-2">
                <div class="container">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Shop</a></li>
                        <li class="breadcrumb-item active" aria-current="page">List</li>
                    </ol>
                </div><!-- End .container -->
            </nav><!-- End .breadcrumb-nav -->

            <div class="page-content">
                <div class="container">
                	<div class="row">
                		<div class="col-lg-9">
                			<div class="toolbox">
                				<div class="toolbox-left">
                					<div class="toolbox-info">
                						Showing <span>9 of 56</span> Products
                					</div><!-- End .toolbox-info -->
                				</div><!-- End .toolbox-left -->

                				<div class="toolbox-right">
                					<div class="toolbox-sort">
                						<label for="sortby">Sort by:</label>
                						<div class="select-custom">
											<select name="sortby" id="sortby" class="form-control">
												<option value="popularity" selected="selected">Most Popular</option>
												<option value="rating">Most Rated</option>
												<option value="date">Date</option>
											</select>
										</div>
                					</div><!-- End .toolbox-sort -->
                					<div class="toolbox-layout">
                						<a href="category-list.html" class="btn-layout active">
                							<svg width="16" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="10" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="10" height="4" />
                							</svg>
                						</a>

                						<a href="category-2cols.html" class="btn-layout">
                							<svg width="10" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="4" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="4" height="4" />
                							</svg>
                						</a>

                						<a href="category.html" class="btn-layout">
                							<svg width="16" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="4" height="4" />
                								<rect x="12" y="0" width="4" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="4" height="4" />
                								<rect x="12" y="6" width="4" height="4" />
                							</svg>
                						</a>

                						<a href="category-4cols.html" class="btn-layout">
                							<svg width="22" height="10">
                								<rect x="0" y="0" width="4" height="4" />
                								<rect x="6" y="0" width="4" height="4" />
                								<rect x="12" y="0" width="4" height="4" />
                								<rect x="18" y="0" width="4" height="4" />
                								<rect x="0" y="6" width="4" height="4" />
                								<rect x="6" y="6" width="4" height="4" />
                								<rect x="12" y="6" width="4" height="4" />
                								<rect x="18" y="6" width="4" height="4" />
                							</svg>
                						</a>
                					</div><!-- End .toolbox-layout -->
                				</div><!-- End .toolbox-right -->
                			</div><!-- End .toolbox -->

                            <div class="products mb-3">
                                <div class="product product-list">
                                    <div class="row">
                                        <div class="col-6 col-lg-3">
                                            <figure class="product-media">
                                                <span class="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-4.jpg" alt="Product image" class="product-image">
                                                </a>
                                            </figure><!-- End .product-media -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-6 col-lg-3 order-lg-last">
                                            <div class="product-list-action">
                                                <div class="product-price">
                                                    $60.00
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 20%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 2 Reviews )</span>
                                                </div><!-- End .rating-container -->

                                                <div class="product-action">
                                                    <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div><!-- End .product-action -->

                                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                            </div><!-- End .product-list-action -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-lg-6">
                                            <div class="product-body product-action-inner">
                                                <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <div class="product-cat">
                                                    <a href="#">Women</a>
                                                </div><!-- End .product-cat -->
                                                <h3 class="product-title"><a href="product.html">Brown paperbag waist pencil skirt</a></h3><!-- End .product-title -->

                                                <div class="product-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque </p>
                                                </div><!-- End .product-content -->
                                                
                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-4-thumb.jpg" alt="product desc">
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-4-2-thumb.jpg" alt="product desc">
                                                    </a>

                                                    <a href="#">
                                                        <img src="assets/images/products/product-4-3-thumb.jpg" alt="product desc">
                                                    </a>
                                                </div><!-- End .product-nav -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .col-lg-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .product -->

                                <div class="product product-list">
                                    <div class="row">
                                        <div class="col-6 col-lg-3">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-5.jpg" alt="Product image" class="product-image">
                                                </a>
                                            </figure><!-- End .product-media -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-6 col-lg-3 order-lg-last">
                                            <div class="product-list-action">
                                                <div class="product-price">
                                                    $84.00
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 0 Reviews )</span>
                                                </div><!-- End .rating-container -->

                                                <div class="product-action">
                                                    <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div><!-- End .product-action -->

                                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                            </div><!-- End .product-list-action -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-lg-6">
                                            <div class="product-body product-action-inner">
                                                <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <div class="product-cat">
                                                    <a href="#">Dresses</a>
                                                </div><!-- End .product-cat -->
                                                <h3 class="product-title"><a href="product.html">Dark yellow lace cut out swing dress</a></h3><!-- End .product-title -->

                                                <div class="product-content">
                                                    <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                                                </div><!-- End .product-content -->
                                                
                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-5-thumb.jpg" alt="product desc">
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-5-2-thumb.jpg" alt="product desc">
                                                    </a>
                                                </div><!-- End .product-nav -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .col-lg-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .product -->

                                <div class="product product-list">
                                    <div class="row">
                                        <div class="col-6 col-lg-3">
                                            <figure class="product-media">
                                                <span class="product-label label-out">Out of Stock</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-6.jpg" alt="Product image" class="product-image">
                                                </a>
                                            </figure><!-- End .product-media -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-6 col-lg-3 order-lg-last">
                                            <div class="product-list-action">
                                                <div class="product-price">
                                                    <span class="out-price">$120.00</span>
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 6 Reviews )</span>
                                                </div><!-- End .rating-container -->

                                                <div class="product-action">
                                                    <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div><!-- End .product-action -->

                                                <a href="#" class="btn-product btn-cart disabled"><span>add to cart</span></a>
                                            </div><!-- End .product-list-action -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-lg-6">
                                            <div class="product-body product-action-inner">
                                                <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <div class="product-cat">
                                                    <a href="#">Jackets</a>
                                                </div><!-- End .product-cat -->
                                                <h3 class="product-title"><a href="product.html">Khaki utility boiler jumpsuit</a></h3><!-- End .product-title -->

                                                <div class="product-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque </p>
                                                </div><!-- End .product-content -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .col-lg-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .product -->

                                <div class="product product-list">
                                    <div class="row">
                                        <div class="col-6 col-lg-3">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-7.jpg" alt="Product image" class="product-image">
                                                </a>
                                            </figure><!-- End .product-media -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-6 col-lg-3 order-lg-last">
                                            <div class="product-list-action">
                                                <div class="product-price">
                                                    $76.00
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 20%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 2 Reviews )</span>
                                                </div><!-- End .rating-container -->

                                                <div class="product-action">
                                                    <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div><!-- End .product-action -->

                                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                            </div><!-- End .product-list-action -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-lg-6">
                                            <div class="product-body product-action-inner">
                                                <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <div class="product-cat">
                                                    <a href="#">Jeans</a>
                                                </div><!-- End .product-cat -->
                                                <h3 class="product-title"><a href="product.html">Blue utility pinafore denim dress</a></h3><!-- End .product-title -->

                                                <div class="product-content">
                                                    <p>Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. </p>
                                                </div><!-- End .product-content -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .col-lg-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .product -->

                                <div class="product product-list">
                                    <div class="row">
                                        <div class="col-6 col-lg-3">
                                            <figure class="product-media">
                                                <span class="product-label label-new">New</span>
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-8.jpg" alt="Product image" class="product-image">
                                                </a>
                                            </figure><!-- End .product-media -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-6 col-lg-3 order-lg-last">
                                            <div class="product-list-action">
                                                <div class="product-price">
                                                    $84.00
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 0%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 0 Reviews )</span>
                                                </div><!-- End .rating-container -->

                                                <div class="product-action">
                                                    <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div><!-- End .product-action -->

                                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                            </div><!-- End .product-list-action -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-lg-6">
                                            <div class="product-body product-action-inner">
                                                <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <div class="product-cat">
                                                    <a href="#">Shoes</a>
                                                </div><!-- End .product-cat -->
                                                <h3 class="product-title"><a href="product.html">Beige knitted elastic runner shoes</a></h3><!-- End .product-title -->

                                                <div class="product-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque </p>
                                                </div><!-- End .product-content -->
                                                
                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-8-thumb.jpg" alt="product desc">
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-8-2-thumb.jpg" alt="product desc">
                                                    </a>
                                                </div><!-- End .product-nav -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .col-lg-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .product -->

                                <div class="product product-list">
                                    <div class="row">
                                        <div class="col-6 col-lg-3">
                                            <figure class="product-media">
                                                <a href="product.html">
                                                    <img src="assets/images/products/product-9.jpg" alt="Product image" class="product-image">
                                                </a>
                                            </figure><!-- End .product-media -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-6 col-lg-3 order-lg-last">
                                            <div class="product-list-action">
                                                <div class="product-price">
                                                    $52.00
                                                </div><!-- End .product-price -->
                                                <div class="ratings-container">
                                                    <div class="ratings">
                                                        <div class="ratings-val" style="width: 80%;"></div><!-- End .ratings-val -->
                                                    </div><!-- End .ratings -->
                                                    <span class="ratings-text">( 1 Reviews )</span>
                                                </div><!-- End .rating-container -->

                                                <div class="product-action">
                                                    <a href="popup/quickView.html" class="btn-product btn-quickview" title="Quick view"><span>quick view</span></a>
                                                    <a href="#" class="btn-product btn-compare" title="Compare"><span>compare</span></a>
                                                </div><!-- End .product-action -->

                                                <a href="#" class="btn-product btn-cart"><span>add to cart</span></a>
                                            </div><!-- End .product-list-action -->
                                        </div><!-- End .col-sm-6 col-lg-3 -->

                                        <div class="col-lg-6">
                                            <div class="product-body product-action-inner">
                                                <a href="#" class="btn-product btn-wishlist" title="Add to wishlist"><span>add to wishlist</span></a>
                                                <div class="product-cat">
                                                    <a href="#">Bags</a>
                                                </div><!-- End .product-cat -->
                                                <h3 class="product-title"><a href="product.html">Orange saddle lock front chain cross body bag</a></h3><!-- End .product-title -->

                                                <div class="product-content">
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque </p>
                                                </div><!-- End .product-content -->
                                                
                                                <div class="product-nav product-nav-thumbs">
                                                    <a href="#" class="active">
                                                        <img src="assets/images/products/product-9-thumb.jpg" alt="product desc">
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-9-2-thumb.jpg" alt="product desc">
                                                    </a>
                                                    <a href="#">
                                                        <img src="assets/images/products/product-9-3-thumb.jpg" alt="product desc">
                                                    </a>
                                                </div><!-- End .product-nav -->
                                            </div><!-- End .product-body -->
                                        </div><!-- End .col-lg-6 -->
                                    </div><!-- End .row -->
                                </div><!-- End .product -->
                            </div><!-- End .products -->

                			<nav aria-label="Page navigation">
							    <ul class="pagination">
							        <li class="page-item disabled">
							            <a class="page-link page-link-prev" href="#" aria-label="Previous" tabindex="-1" aria-disabled="true">
							                <span aria-hidden="true"><i class="icon-long-arrow-left"></i></span>Prev
							            </a>
							        </li>
							        <li class="page-item active" aria-current="page"><a class="page-link" href="#">1</a></li>
							        <li class="page-item"><a class="page-link" href="#">2</a></li>
							        <li class="page-item"><a class="page-link" href="#">3</a></li>
							        <li class="page-item-total">of 6</li>
							        <li class="page-item">
							            <a class="page-link page-link-next" href="#" aria-label="Next">
							                Next <span aria-hidden="true"><i class="icon-long-arrow-right"></i></span>
							            </a>
							        </li>
							    </ul>
							</nav>
                		</div><!-- End .col-lg-9 -->
                		<aside class="col-lg-3 order-lg-first">
                			<div class="sidebar sidebar-shop">
                				<div class="widget widget-clean">
                					<label>Filters:</label>
                					<a href="#" class="sidebar-filter-clear">Clean All</a>
                				</div><!-- End .widget widget-clean -->

                				<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-1" role="button" aria-expanded="true" aria-controls="widget-1">
									        Category
									    </a>
									</h3><!-- End .widget-title -->

									<div class="collapse show" id="widget-1">
										<div class="widget-body">
											<div class="filter-items filter-items-count">
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-1">
														<label class="custom-control-label" for="cat-1">Dresses</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">3</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-2">
														<label class="custom-control-label" for="cat-2">T-shirts</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">0</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-3">
														<label class="custom-control-label" for="cat-3">Bags</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">4</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-4">
														<label class="custom-control-label" for="cat-4">Jackets</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">2</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-5">
														<label class="custom-control-label" for="cat-5">Shoes</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">2</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-6">
														<label class="custom-control-label" for="cat-6">Jumpers</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">1</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-7">
														<label class="custom-control-label" for="cat-7">Jeans</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">1</span>
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="cat-8">
														<label class="custom-control-label" for="cat-8">Sportwear</label>
													</div><!-- End .custom-checkbox -->
													<span class="item-count">0</span>
												</div><!-- End .filter-item -->
											</div><!-- End .filter-items -->
										</div><!-- End .widget-body -->
									</div><!-- End .collapse -->
        						</div><!-- End .widget -->

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-2" role="button" aria-expanded="true" aria-controls="widget-2">
									        Size
									    </a>
									</h3><!-- End .widget-title -->

									<div class="collapse show" id="widget-2">
										<div class="widget-body">
											<div class="filter-items">
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-1">
														<label class="custom-control-label" for="size-1">XS</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-2">
														<label class="custom-control-label" for="size-2">S</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" checked id="size-3">
														<label class="custom-control-label" for="size-3">M</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" checked id="size-4">
														<label class="custom-control-label" for="size-4">L</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-5">
														<label class="custom-control-label" for="size-5">XL</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="size-6">
														<label class="custom-control-label" for="size-6">XXL</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->
											</div><!-- End .filter-items -->
										</div><!-- End .widget-body -->
									</div><!-- End .collapse -->
        						</div><!-- End .widget -->

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-3" role="button" aria-expanded="true" aria-controls="widget-3">
									        Colour
									    </a>
									</h3><!-- End .widget-title -->

									<div class="collapse show" id="widget-3">
										<div class="widget-body">
											<div class="filter-colors">
												<a href="#" style="background: #b87145;"><span class="sr-only">Color Name</span></a>
												<a href="#" style="background: #f0c04a;"><span class="sr-only">Color Name</span></a>
												<a href="#" style="background: #333333;"><span class="sr-only">Color Name</span></a>
												<a href="#" class="selected" style="background: #cc3333;"><span class="sr-only">Color Name</span></a>
												<a href="#" style="background: #3399cc;"><span class="sr-only">Color Name</span></a>
												<a href="#" style="background: #669933;"><span class="sr-only">Color Name</span></a>
												<a href="#" style="background: #f2719c;"><span class="sr-only">Color Name</span></a>
												<a href="#" style="background: #ebebeb;"><span class="sr-only">Color Name</span></a>
											</div><!-- End .filter-colors -->
										</div><!-- End .widget-body -->
									</div><!-- End .collapse -->
        						</div><!-- End .widget -->

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-4" role="button" aria-expanded="true" aria-controls="widget-4">
									        Brand
									    </a>
									</h3><!-- End .widget-title -->

									<div class="collapse show" id="widget-4">
										<div class="widget-body">
											<div class="filter-items">
												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-1">
														<label class="custom-control-label" for="brand-1">Next</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-2">
														<label class="custom-control-label" for="brand-2">River Island</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-3">
														<label class="custom-control-label" for="brand-3">Geox</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-4">
														<label class="custom-control-label" for="brand-4">New Balance</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-5">
														<label class="custom-control-label" for="brand-5">UGG</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-6">
														<label class="custom-control-label" for="brand-6">F&F</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

												<div class="filter-item">
													<div class="custom-control custom-checkbox">
														<input type="checkbox" class="custom-control-input" id="brand-7">
														<label class="custom-control-label" for="brand-7">Nike</label>
													</div><!-- End .custom-checkbox -->
												</div><!-- End .filter-item -->

											</div><!-- End .filter-items -->
										</div><!-- End .widget-body -->
									</div><!-- End .collapse -->
        						</div><!-- End .widget -->

        						<div class="widget widget-collapsible">
    								<h3 class="widget-title">
									    <a data-toggle="collapse" href="#widget-5" role="button" aria-expanded="true" aria-controls="widget-5">
									        Price
									    </a>
									</h3><!-- End .widget-title -->

									<div class="collapse show" id="widget-5">
										<div class="widget-body">
                                            <div class="filter-price">
                                                <div class="filter-price-text">
                                                    Price Range:
                                                    <span id="filter-price-range"></span>
                                                </div><!-- End .filter-price-text -->

                                                <div id="price-slider"></div><!-- End #price-slider -->
                                            </div><!-- End .filter-price -->
										</div><!-- End .widget-body -->
									</div><!-- End .collapse -->
        						</div><!-- End .widget -->
                			</div><!-- End .sidebar sidebar-shop -->
                		</aside><!-- End .col-lg-3 -->
                	</div><!-- End .row -->
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
</body>
    <default-layout>
        <template v-slot:sidebar-sx-categoryList>
            <div class="sidebar">
              <h2>Cerca anche in</h2>
              <ul>
                <RouterLink
                v-for="category in categories"
                :key="category.id"
                :to="{ name: 'products', params: { id: category.id }, query: { title: category.title } }"
                >
                  <li>{{ category.title }}</li>
                </RouterLink>
              </ul>
            </div>
        </template>
        <template v-slot:sidebar-sx-productFilter>
            <div>
                <div class="sidebar">
                    <h2>Rating</h2>
                    <ul>
                        <li
                        v-for="(r, i) in 4"
                        :key="i"
                        >
                            <input type="checkbox" v-model="selectedRatings" :value="r">
                            {{ r }}+
                        </li>
                    </ul>
                </div>
                <div class="sidebar">
                    <h2>Prezzo</h2>
                    <ul>
                        <li
                        v-for="(p, i) in priceRange"
                        :key="i"
                        >
                            <input type="checkbox" v-model="selectedPrices" :value="p.value">
                            {{ p.label }}
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isBook || isVG">
                    <h2>Brand</h2>
                    <ul>
                        <li
                        v-for="(brand, i) in allBrands"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedBrands" :value="brand">
                                {{ brand }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isCD">
                    <h2>Compositore</h2>
                    <ul>
                        <li
                        v-for="(composer, i) in allComposers"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedComposer" :value="composer">
                                {{ composer }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isBook || isVG">
                    <h2>Lingua</h2>
                    <ul>
                        <li
                        v-for="(language, i) in allLanguages"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedLanguage" :value="language">
                                {{ language }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isBook || isVG">
                    <h2>Autore</h2>
                    <ul>
                        <li
                        v-for="author in allAuthors"
                        :key="author.id"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedAuthor" :value="author">
                                {{ author }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isCD">
                    <h2>Produttore</h2>
                    <ul>
                        <li
                        v-for="(producer, i) in allProducers"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedProducer" :value="producer">
                                {{ producer }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isVG">
                    <h2>PEGI</h2>
                    <ul>
                        <li
                        v-for="(pegi, i) in allPegis"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedPegi" :value="pegi">
                                {{ pegi }}
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="sidebar" v-if="isVG">
                    <h2>Piattaforma</h2>
                    <ul>
                        <li
                        v-for="(platform, i) in allPlatforms"
                        :key="i"
                        >
                            <label>
                                <input type="checkbox" v-model="selectedPlatform" :value="platform">
                                {{ platform }}
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
            
                <h1 class="category-title">{{ categoryTitle }}</h1>

                <div v-if="isFilterSelected" class="selected-filters">
                    <h2>Filtri Selezionati:</h2>
                    <ul>
                        <li v-for="rating in selectedRatings" :key="rating">Rating: {{ rating }}+ <i @click="removeSelectedFilter('selectedRatings', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="price in selectedPrices" :key="price">Prezzo: {{ price }} EUR <i @click="removeSelectedFilter('selectedPrices', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="brand in selectedBrands" :key="brand">brand: {{ brand }} <i @click="removeSelectedFilter('selectedBrands', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="language in selectedLanguage" :key="language">{{ language }} <i @click="removeSelectedFilter('selectedLanguage', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="author in selectedAuthor" :key="author">{{ author }} <i @click="removeSelectedFilter('selectedAuthor', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="composer in selectedComposer" :key="composer">{{ composer }} <i @click="removeSelectedFilter('selectedComposer', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="producer in selectedProducer" :key="producer">{{ producer }} <i @click="removeSelectedFilter('selectedProducer', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="pegi in selectedPegi" :key="pegi">{{ pegi }} <i @click="removeSelectedFilter('selectedPegi', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                        <li v-for="platform in selectedPlatform" :key="platform">{{ platform }} <i @click="removeSelectedFilter('selectedPlatform', index)" class="fa-solid fa-xmark" style="color: #000000;"></i></li>
                    </ul>
                    <button v-if="isFilterSelected" @click="clearAllFilters">Cancella tutti i filtri</button>
                </div>
           
                <div 
                id="productCard-container"
                >
                    <ProductCard 
                    v-for="product in filteredProducts.slice(0, visibleItems)"
                    :key="product.id"
                    :product="product"
                    />
                </div>
            
                <div 
                class="load-more-button" 
                v-if="this.visibleItems < this.filteredProducts.length"
                >
                    <button @click="loadMoreItems">Carica più prodotti</button>
                </div>
           
    </default-layout>
</template>

<script>
import { useGetDataFromDB } from '../stores/getDataFromDB';
import ProductCard from '../components/ProductCard.vue';
import DefaultLayout from '../layouts/DefaultLayout.vue';
// import MainSectionLayout from '../layouts/MainSectionLayout.vue';
import { useLocalStorage } from "@vueuse/core";

    export default {
        components: {
            ProductCard,
            DefaultLayout,
            // MainSectionLayout
        },
        data() {
            return {
                getDataFromDB: useGetDataFromDB(),
                priceRange: [
                    { label: "fino a 5", value: "0-5" },
                    { label: "5 a 10", value: "5-10" },
                    { label: "10 a 25", value: "10-25" },
                    { label: "25 a 50", value: "25-50" },
                    { label: "50+", value: "50+" },
                ],
                selectedPrices: [],
                selectedRatings: [],
                selectedBrands: [],
                selectedAuthor: [],
                selectedLanguage: [],
                selectedProducer: [],
                selectedComposer: [],
                selectedPegi: [],
                selectedPlatform: [],
                itemsPage: 12,
                visibleItems: 12,
            }
        },
        props: {
            id: {
                required: true,
                type: String
            }
        },
        computed: {
            category () {
                return this.getDataFromDB.categories.find(category => category.id === this.id)
            },
            categories(){
                return this.getDataFromDB.categories
            },
            categoryTitle(){
                if(this.categories){
                    const category = this.categories.find(category => category.id === this.id)
                    return category.title
                }
            },
            allBrands() {
                return this.getDataFromDB.brandsFilterOption;
            },
            allLanguages() {
                return this.getDataFromDB.languagesFilterOption;
            },
            allAuthors() {
                return this.getDataFromDB.authorsFilterOption;
            },
            allProducers() {
                return this.getDataFromDB.producersFilterOption;
            },
            allComposers() {
                return this.getDataFromDB.composersFilterOption;
            },
            allPegis() {
                return this.getDataFromDB.pegisFilterOption;
            },
            allPlatforms(){
                return this.getDataFromDB.platformsFilterOption
            },
            filteredProducts() {
                return this.getDataFromDB.products.filter(product => {
                    return product && this.filterProducts(product)
                })
            },
            isBook() {
                return this.getDataFromDB.products.filter(product => product.type == 'book') && this.getDataFromDB.products.filter(product => product.type == 'book').length > 0;
            },
            isCD() {
                return this.getDataFromDB.products.filter(product => product.type == 'cd') && this.getDataFromDB.products.filter(product => product.type == 'cd').length > 0;
            },
            isVG() {
                return this.getDataFromDB.products.filter(product => product.type == 'vg') && this.getDataFromDB.products.filter(product => product.type == 'vg').length > 0;
            },
            isFilterSelected(){
                return (
                  this.selectedRatings.length > 0 ||
                  this.selectedPrices.length > 0 ||
                  this.selectedBrands.length > 0 ||
                  this.selectedAuthor.length > 0 ||
                  this.selectedLanguage.length > 0 ||
                  this.selectedProducer.length > 0 ||
                  this.selectedComposer.length > 0 ||
                  this.selectedPegi.length > 0 ||
                  this.selectedPlatform.length > 0
                );
            },
        },
        methods: {
            clearAllFilters() {
              this.selectedRatings = [];
              this.selectedPrices = [];
              this.selectedBrands = [];
              this.selectedAuthor = [];
              this.selectedLanguage = [];
              this.selectedProducer = [];
              this.selectedComposer = [];
              this.selectedPegi.length = [];
              this.selectedPlatform.length = [];
            },
            loadMoreItems() {
                this.visibleItems += this.itemsPage
            },
            filterProducts(product) {
                const selectedRating = this.selectedRatings.length === 0 || this.selectedRatings.some(rating => product.rating >= rating)
                let selectedPrice = this.selectedPrices.length === 0;

                if (this.selectedPrices.length > 0) {
                    const priceValues = this.selectedPrices.map(price => {
                        if (price.includes('+')) {
                            const minPrice = parseFloat(price);
                            return { minPrice, maxPrice: Number.POSITIVE_INFINITY };
                        } else {
                            const [minPrice, maxPrice] = price.split('-').map(parseFloat);
                            return { minPrice, maxPrice };
                        }
                    });
                
                    const productPrice = parseFloat(product.price);
                
                    selectedPrice = priceValues.some(priceRange => {
                        return productPrice >= priceRange.minPrice && productPrice <= priceRange.maxPrice;
                    });
                }

                const selectedBrand = this.selectedBrands.length === 0 || this.selectedBrands.includes(product.brand)
                const selectedProducer = this.selectedProducer.length === 0 || this.selectedProducer.includes(product.producer)
                const selectedComposer = this.selectedComposer.length === 0 || product.details.some(detail => this.selectedComposer.includes(detail.composer));
                const selectedLanguage = this.selectedLanguage.length === 0 || product.details.some(detail => this.selectedLanguage.includes(detail.language));

                const selectedPegi = this.selectedPegi.length === 0 || product.details.some(detail => this.selectedPegi.includes(detail.pegi));
                const selectedPlatform = this.selectedPlatform.length === 0 || product.details.some(detail => this.selectedPlatform.includes(detail.platform));
                const selectedAuthor = this.selectedAuthor.length === 0 || product.details.some(detail => {
                    if (typeof detail.author === "string") {
                        return this.selectedAuthor.includes(detail.author);
                    } else if (Array.isArray(detail.author)) {
                        return detail.author.some(author => this.selectedAuthor.includes(author));
                    }
                    return false;
                });

                return selectedAuthor && selectedBrand && selectedLanguage && selectedPrice && selectedRating && selectedComposer && selectedProducer && selectedPlatform && selectedPegi
            },
            removeSelectedFilter(selectedArrayName, index) {
                this[selectedArrayName].splice(index, 1);
            },
        },
        watch: {
            id(newId) {
                this.getDataFromDB.getAllProducts(newId)
                this.getDataFromDB.getFilterOptions(newId)
            },
        },
        mounted(){
            this.getDataFromDB.getAllProducts(this.id)
            this.getDataFromDB.getFilterOptions(this.id)
        }
    }
</script>

<style lang="scss" scoped>

.category-title{
    background-color: white;
}
    
#productCard-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

.selected-filters{
    width: 100%;
    ul{
        display: flex;
        flex-wrap: wrap;
        
        li{
            flex-grow: 0;
            margin-right: 5px;
        }
    }
}
.sidebar {
  background-color: white;
}

.sidebar h2 {
  font-size: 18px;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: start;

  li{
      font-size: small;
  }
}

.sidebar li {
  margin-bottom: 10px;
  cursor: pointer;
  white-space: nowrap;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
}

</style>