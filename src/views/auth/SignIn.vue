<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12 col-md-5 col-xl-4 my-5">
                <!-- Heading -->
                <h1 class="display-4 text-center mb-3">
                    Sign in
                </h1>

                <!-- Subheading -->
                <p class="text-muted text-center mb-5">
                    Free access to our dashboard.
                </p>

                <!-- Form -->
                <form>
                    <!-- Email address -->
                    <div class="form-group">
                        <!-- Label -->
                        <label>Email Address</label>

                        <!-- Input -->
                        <input
                            type="email"
                            class="form-control"
                            placeholder="name@address.com"
                        />
                    </div>

                    <!-- Password -->
                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <!-- Label -->
                                <label>Password</label>
                            </div>
                            <div class="col-auto">
                                <!-- Help text -->
                                <router-link to="/password-reset">Forgot password?</router-link>.
                            </div>
                        </div>
                        <!-- / .row -->

                        <!-- Input group -->
                        <div class="input-group input-group-merge">
                            <!-- Input -->
                            <input
                                type="password"
                                class="form-control form-control-appended"
                                placeholder="Enter your password"
                            />

                            <!-- Icon -->
                            <div class="input-group-append">
                                <span class="input-group-text">
                                    <i class="fe fe-eye"></i>
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Submit -->
                    <button class="btn btn-lg btn-block btn-primary mb-3">
                        Sign in
                    </button>

                    <!-- Link -->
                    <div class="text-center">
                        <small class="text-muted text-center">
                            Don't have an account yet?
                            <router-link to="/sign-up">Sign up</router-link>.
                        </small>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignIn"
};
</script>
