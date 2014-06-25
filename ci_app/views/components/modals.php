<!-- Login Modal -->
<div class="modal fade" id="login" tabindex="-1" role="dialog" aria-labelledby="login-header" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="login-header">
        Login
      </div>
      <form id="login-form" role="form">
        <div class="modal-body">
          <div class="form-group">
              <label for="username">Username</label>
              <input type="text" class="form-control" id="username">
          </div>

          <div class="form-group">
              <label for="pass">Password</label>
              <input type="password" class="form-control" id="pass">
          </div>
          <a href="#">Forgotten Password</a>
        </div>
        <div class="modal-footer">
          <div class="form-submit">
            <button type="submit" class="btn btn-transparent">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Signup Modal -->
<div class="modal fade" id="signup" tabindex="-1" role="dialog" aria-labelledby="signup-header" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="signup-header">
        Sign Up
      </div>
      <form id="signup-form" role="form">
        <div class="modal-body">
          <div class="form-group">
              <label for="username">Desired Username</label>
              <input type="text" class="form-control" id="username">
          </div>

          <div class="form-group">
              <label for="email">Email</label>
              <input type="email" class="form-control" id="email">
          </div>

          <div class="form-group">
              <label for="pass">Password</label>
              <input type="password" class="form-control" id="pass">
          </div>

          <div class="form-group">
              <label for="pass-confirm">Confirm Password</label>
              <input type="password" class="form-control" id="pass-confirm">
          </div>

        </div>
        <div class="modal-footer">
          <div class="form-submit">
            <button type="submit" class="btn btn-transparent">Submit</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Newsletter Modal -->
<div class="modal fade" id="newsletter" tabindex="-1" role="dialog" aria-labelledby="newsletter-header" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="newsletter-header">
        Our Newsletter
      </div>
        <form id="newsletter-form" role="form">
          <div class="modal-body">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>
        </div>
        <div class="modal-footer">
          <div class="form-submit">
            <button type="submit" class="btn btn-transparent">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

<!-- Contact Modal -->
<div class="modal fade" id="contact" tabindex="-1" role="dialog" aria-labelledby="contact-header" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="contact-header">
        Get In Touch
      </div>
      <form id="contact-form" role="form">
        <div class="modal-body">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name">
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email">
            </div>

            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="6"></textarea>
            </div>

        </div>
        <div class="modal-footer">
          <div class="form-submit">
            <button type="submit" class="btn btn-transparent">Send</button>
          </div>
        </div>

      </form>

    </div>
  </div>
</div>

<!-- submission-thanks Modal -->
<div class="modal fade" id="submission-thanks" tabindex="-1" role="dialog" aria-labelledby="submission-thanks-header" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header" id="submission-thanks-header">
        Thanks
      </div>
      <div class="modal-body">
        <p>Your submission has now been added to our website</p>
      </div>
      <div class="modal-footer form-submit">
        <button type="submit" class="btn btn-transparent" data-dismiss="modal">Done</button>
      </div>
    </div>
  </div>
</div>

<?php /*<a class="btn" href="#" data-toggle="modal" data-target="#login">Login</a>
<a class="btn" href="#" data-toggle="modal" data-target="#signup">Signup</a>
<a class="btn" href="#" data-toggle="modal" data-target="#newsletter">Newsletter</a>
<a class="btn" href="#" data-toggle="modal" data-target="#submission-thanks">Thanks</a>
<a class="btn" href="#" data-toggle="modal" data-target="#contact">Contact</a> */