/*** 
 * Relaxr HW4 - but was it relaxing? Probably not.
 * 
 * Notice how I wrap the whole thing in one giant document.ready not a bunch of single document.readys
 * Why am I doing this? Because once I know the document is READY, who cares how many times its ready?
 * One time is good enough for me, then we know we can execute other instructions.
 */

$(document).ready(function() {
  /****
   * Check out the HTML
   * We've got two read more / read less link pairs in the HTML
   * 
   * <p class="read-link read-group-1"><a href="#">Read more &gt;</a></p>
   * <p class="read-link read-group-1 hide"><a href="#">Read less &gt;</a></p>
   * <p class="hide" id="show-this-on-click-1">CONTENT HERE</p>
   * 
   * So we need a series of three classes:
   * .read-link (defines the look of each link, same for both groups, all )
   * .read-group-1 (target for our click event, with fire on both read more and read less if clicked)
   * .hide (keeps content hidden)
   */ 
  $('.read-group-1').click(function(event) {
    // Stop default <a> click event (which takes you to top of the page)
    event.preventDefault();

    // Shows hidden text when 'Read More' is clicked
    $('#show-this-on-click-1').slideToggle(250);

    /* Switches hide from 'Read More' to 'Read Less'
     * Using toggleClass, jQuery will find every instance of .read-group-1, see if it's got .hide class on it
     * If it has .hide, jQuery removes it. If it doesn't have .hide, jQuery adds it - exactly what we want to do.
     */
    $('.read-group-1').toggleClass('hide');

    // LEARN YOUR METHODS! Literally all you need here is .toggleClass. Don't make your life so hard
  });

  // Just repeat everything for the second group of links (.read-group-2)
  $('.read-group-2').click(function(event) {
    event.preventDefault();    
    $('#show-this-on-click-2').slideToggle(250);
    $('.read-group-2').toggleClass('hide');
  });

  // Read group 3 (.read-group-2)
  $('.read-group-3').click(function(event) {
    event.preventDefault();    
    $('#learn-more-text').slideToggle(250);
    $('.read-group-3').toggleClass('hide');
  });
});

/*
 * HEY YOU! Yeah, you, that's right.
 * You noticing these three click functions are REALLY similar...
 * Whenever you see that in code, that's a good time to think about refactoring.
 * How could you do this with one click function? Think about arguments...
 * And then checkout app-advanced.js
 */ 
