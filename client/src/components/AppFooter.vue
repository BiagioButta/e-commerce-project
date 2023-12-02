<template>
    <footer class="footer">
        <div class="cta cta-horizontal cta-horizontal-box bg-dark bg-image" style="background-image: url('assets/images/demos/demo-14/bg-1.jpg');">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-8 offset-xl-2">
                        <div class="row align-items-center">
                            <div class="col-lg-5 cta-txt">
                                <h3 class="cta-title text-primary">Iscrivi alla nostra Newsletter</h3><!-- End .cta-title -->
                                <p class="cta-desc text-light">Ricevi infrmazioni e sconti sui nostri prodotti</p><!-- End .cta-desc -->
                            </div><!-- End .col-lg-5 -->
                            
                            <div class="col-lg-7">
                                <form action="#">
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Inserisci la tua email" aria-label="Email Adress" required>
                                        <div class="input-group-append">
                                            <button class="btn" type="submit">Iscriviti</button>
                                        </div><!-- .End .input-group-append -->
                                    </div><!-- .End .input-group -->
                                </form>
                            </div><!-- End .col-lg-7 -->
                        </div><!-- End .row -->
                    </div><!-- End .col-xl-8 offset-2 -->
                </div><!-- End .row -->
            </div><!-- End .container-fluid -->
        </div><!-- End .cta -->
        <div class="footer-middle border-0">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-12 col-lg-4">
                        <div class="widget widget-about">
                            <h1>Logo</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, quae! Illum iusto odio obcaecati! Consequatur cumque nobis vero dolores saepe. Consequuntur modi eos voluptas labore.</p>
                            
                            <div class="widget-about-info">
                                <div class="row">
                                    <div class="col-sm-6 col-md-4">
                                        <span class="widget-about-title">Chiamaci al numero</span>
                                        <a href="#">+0123 456 789</a>
                                    </div><!-- End .col-sm-6 -->
                                    <div class="col-sm-6 col-md-8">
                                        <span class="widget-about-title">Metodi di pagamento</span>
                                        <figure class="footer-payments">
                                            <img src="../assets/image/payments.png" alt="Payment methods" width="272" height="20">
                                        </figure><!-- End .footer-payments -->
                                    </div><!-- End .col-sm-6 -->
                                </div><!-- End .row -->
                            </div><!-- End .widget-about-info -->
                        </div><!-- End .widget about-widget -->
                    </div><!-- End .col-sm-12 col-lg-4 -->
                    <div class="col-sm-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title">Link Utili</h4><!-- End .widget-title -->
                            <ul class="widget-list">
                                <li
                                v-for="link in usefulLinks"
                                :key="link.name"
                                >
                                    <router-link :to="link.link">{{ link.name }}</router-link>    
                                </li>
                            </ul><!-- End .widget-list -->
                        </div><!-- End .widget -->
                    </div><!-- End .col-sm-4 col-lg-2 -->
                    <div class="col-sm-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title">Servizio Clienti</h4><!-- End .widget-title -->
                            <ul class="widget-list">
                                <li
                                v-for="link in customerServiceLinks"
                                :key="link.name"
                                >
                                    <router-link :to="link.link">{{ link.name }}</router-link>
                                </li>
                            </ul><!-- End .widget-list -->
                        </div><!-- End .widget -->
                    </div><!-- End .col-sm-4 col-lg-2 -->
                    <div class="col-sm-4 col-lg-2">
                        <div class="widget">
                            <h4 class="widget-title">Il mio Account</h4><!-- End .widget-title -->
                            <ul class="widget-list">
                                <li
                                v-for="link in myAccountLinks"
                                :key="link.name"
                                >
                                    <router-link :to="link.link">{{ link.name }}</router-link>
                                </li>
                            </ul><!-- End .widget-list -->
                        </div><!-- End .widget -->
                    </div><!-- End .col-sm-4 col-lg-2 -->
                    <div class="col-sm-4 col-lg-2">
                        <div class="widget widget-newsletter">
                            <h4 class="widget-title">Newsletter</h4><!-- End .widget-title -->
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, suscipit?</p>
                            
                            <form action="#">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Inserisci la tua email" aria-label="Email Adress" required>
                                    <div class="input-group-append">
                                        <button class="btn btn-dark" type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                                    </div><!-- .End .input-group-append -->
                                </div><!-- .End .input-group -->
                            </form>
                        </div><!-- End .widget -->
                    </div><!-- End .col-sm-4 col-lg-2 -->
                </div><!-- End .row -->
            </div><!-- End .container-fluid -->
        </div><!-- End .footer-middle -->
        <div class="footer-bottom">
            <div class="container-fluid">
                <p class="footer-copyright">Copyright © PippoMustica.</p><!-- End .footer-copyright -->
                <div class="social-icons social-icons-color">
                    <span class="social-label">Social Media</span>
                    <router-link 
                    v-for="link in socialMediaLinks" 
                    :key="link.name" 
                    :to="link.link"
                    class="social-icon"
                    :class="link.class" 
                    >
                      <span  v-html="link.icon"></span>
                    </router-link>
                </div><!-- End .soial-icons -->
            </div><!-- End .container-fluid -->
        </div><!-- End .footer-bottom -->
    </footer><!-- End .footer -->
</template>

<script>
export default {
    data() {
        return {
            socialMediaLinks: [
              {
                name: 'Facebook',
                link: '#/',
                class: 'social-facebook',
                icon: '<i class="fa-brands fa-facebook-f"></i>'
              },
              {
                name: 'Twitter',
                link: '#',
                class: 'social-twitter',
                icon: '<i class="fa-brands fa-twitter"></i>'
              },
              {
                name: 'Instagram',
                link: '#',
                class: 'social-instagram',
                icon: '<i class="fa-brands fa-instagram"></i>'
              },
              {
                name: 'Youtube',
                link: '#',
                class: 'social-youtube',
                icon: '<i class="fa-brands fa-youtube"></i>'
              },
              {
                name: 'Instagram',
                link: '#',
                class: 'social-pinterest',
                icon: '<i class="fa-brands fa-pinterest"></i>'
              }
            ],
            usefulLinks: [
              { name: 'Chi siamo', link: '#' },
              { name: 'FAQ', link: '#' },
              { name: 'Contattaci', link: '#' },
              { name: 'Accedi', link: '#' }
            ],
            customerServiceLinks: [
              { name: 'Metodi di pagamento', link: '#' },
              { name: 'Rimborsi!', link: '#' },
              { name: 'Spedizioni', link: '#' },
              { name: 'Termini e condizioni', link: '#' },
              { name: 'Privacy Policy', link: '#' }
            ],
            myAccountLinks: [
              { name: 'Accedi', link: '#' },
              { name: 'Carrello', link: '#' },
              { name: 'Lista desideri', link: '#' },
              { name: 'Traccia il tuo ordine', link: '#' }
            ]

        }
    },
}

</script>

<style lang="scss" scoped>

</style>