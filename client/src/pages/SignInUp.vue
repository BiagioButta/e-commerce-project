<template>
    <div class="modal fade show" id="signin-modal" tabindex="-1" role="dialog" aria-hidden="true" style="padding-right: 15px;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
                <div class="modal-body">

                    <div class="form-box">
                        <div class="form-tab">
                            <ul class="nav nav-pills nav-fill" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link" @click="activateTab('signin-tab')" :class="{ 'active' : activeTab === 'signin-tab'}">Accedi</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" @click="activateTab('register-tab')" :class="{ 'active' : activeTab === 'register-tab'}">Registrati</a>
                                </li>
                            </ul>
                            <div class="tab-content" id="tab-content-5">
                                <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'signin-tab', 'active': activeTab === 'signin-tab' }">
                                    <form @submit.prevent="login">
                                        <div class="form-group">
                                            <label for="singin-email">Nome Utente o Email *</label>
                                            <input type="text" class="form-control" id="singin-email" name="singin-email" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="singin-password">Password *</label>
                                            <input type="password" class="form-control" id="singin-password" name="singin-password" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>Accedi</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="signin-remember">
                                                <label class="custom-control-label" for="signin-remember">Ricordami</label>
                                            </div><!-- End .custom-checkbox -->

                                            <a href="#" class="forgot-link">Password dimenticata?</a>
                                        </div><!-- End .form-footer -->
                                    </form>
                                    <div class="form-choice">
                                        <p class="text-center">oppure accedi con</p>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-g">
                                                    <i class="fa-brands fa-google"></i>
                                                    Accedi con Google
                                                </a>
                                            </div><!-- End .col-6 -->
                                            <div class="col-sm-6">
                                                <a href="#" @click.prevent="loginWithGoogle" class="btn btn-login btn-f">
                                                    <i class="fa-brands fa-facebook"></i>
                                                    Accedi con Facebook
                                                </a>
                                            </div><!-- End .col-6 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .form-choice -->
                                </div><!-- .End .tab-pane -->
                                <div :class="{ 'tab-pane': true, 'fade': true, 'show': activeTab === 'register-tab', 'active': activeTab === 'register-tab' }">
                                    <form action="#">
                                        <div class="form-group">
                                            <label for="register-email">Inserisci la tua email *</label>
                                            <input type="email" class="form-control" id="register-email" name="register-email" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-group">
                                            <label for="register-password">Password *</label>
                                            <input type="password" class="form-control" id="register-password" name="register-password" required>
                                        </div><!-- End .form-group -->

                                        <div class="form-footer">
                                            <button type="submit" class="btn btn-outline-primary-2">
                                                <span>Registrati</span>
                                                <i class="icon-long-arrow-right"></i>
                                            </button>

                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="register-policy" required>
                                                <label class="custom-control-label" for="register-policy">Sono daccordo col le  <a href="#">privacy policy</a> *</label>
                                            </div><!-- End .custom-checkbox -->
                                        </div><!-- End .form-footer -->
                                    </form>
                                    <div class="form-choice">
                                        <p class="text-center">oppure accedi con</p>
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-g">
                                                    <i class="fa-brands fa-google"></i>
                                                    Accedi con Google
                                                </a>
                                            </div><!-- End .col-6 -->
                                            <div class="col-sm-6">
                                                <a href="#" class="btn btn-login btn-f">
                                                    <i class="fa-brands fa-facebook"></i>
                                                    Accedi con Facebook
                                                </a>
                                            </div><!-- End .col-6 -->
                                        </div><!-- End .row -->
                                    </div><!-- End .form-choice -->
                                </div><!-- .End .tab-pane -->
                            </div><!-- End .tab-content -->
                        </div><!-- End .form-tab -->
                    </div><!-- End .form-box -->
                </div><!-- End .modal-body -->
            </div><!-- End .modal-content -->
        </div><!-- End .modal-dialog -->
    </div><!-- End .modal -->
</template>

<script>
export default {
    data() {
        return {
            activeTab : 'signin-tab'
        }
    },
    methods: {
        activateTab(tabId) {
          this.activeTab = tabId;
        },
    }
}
</script>