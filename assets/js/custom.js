jQuery(document).ready(function () {
  jQuery("#publish_button").on("click", function () {
    const commentText = jQuery("#comment_input").val().trim();

    if (commentText) {
      const newComment = `
        <div class="comments" style="display: block">
          <div class="profile">
            <img src="assets/images/anonymous.png" />
          </div>
          <div class="comment-content">
            <p class="name">
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">utilizador anónimo</font>
              </font>
            </p>
            <p>
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">${commentText}</font>
              </font>
            </p>
          </div>
          <div class="clr"></div>
          <div class="comment-status">
            <span>
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">Curte·comente</font>
              </font>
              <img src="assets/images/like.png" width="15px" height="15px" />
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">0</font>
              </font>
            </span>
            <small>
              <font style="vertical-align: inherit">
                <font style="vertical-align: inherit">·</font>
              </font>
              <u>
                <font style="vertical-align: inherit">
                  <font style="vertical-align: inherit">0 minutos antes</font>
                </font>
              </u>
            </small>
          </div>
        </div>`;

      // replace the placeholder IF new comment is FIRST comment
      if (jQuery("#comments_container .comments").length) {
        jQuery("#comments_container .comments").replaceWith(newComment);
      } else {
        jQuery("#comments_container").append(newComment);
      }

      // Clear input
      jQuery("#comment_input").val("");
    } else {
      alert("Please enter a comment before publishing.");
    }
  });
});
