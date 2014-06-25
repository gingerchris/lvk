<h1>Get In Touch</h1>
<div class="row" id="contact">
    <div class="col-md-8" class="red">
        <form role="form" method="post" action="<?php echo base_url('contact'); ?>">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name" class="form-control" />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" name="email" id="email" class="form-control" />
            </div>
            <div class="form-group">
                <label for="comments">Comments</label>
                <textarea name="comments" class="form-control" rows="4"></textarea>
            </div>
            <div class="form-group absolute">
                <input type="submit" class="btn" value="submit" />
            </div>
        </form>
    </div>
    <div class="col-md-4">
        <p>
            Address Line 1<br />
            Address Line 2<br />
            Address Line 3<br />
            Phone Number
        </p>
    </div>
    <div class="col-md-4 bottom">
        <div class="contactbox">
            <img src="<?php echo base_url('frontend/images/news.png'); ?>" alt="contact us" />
            <h2>The MK Newsletter</h2>
            <a href="#" data-toggle="modal" data-target="#newsletter"></a>
        </div>
    </div>
</div>