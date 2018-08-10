# Bonobos Zoom/Pan App

To get started, simply clone or download this repository and open the `index.html` file in your browser of choice. I've checked the bundled JavaScript into my git history, so there's no need to install node modules.

This was a **fun** challenge. My experience has almost exclusively been with Chrome; as an internal tool developer, cross-browser support was simply not a priority for me. This project forced me to dig into non-standard functionality and properties. For instance, I originally used `scrollTo` before I realized that neither Internet Explorer nor Edge support that function. Instead, I reassigned the `scrollTop` and `scrollLeft` properties, which worked universally.

My background is in React, and I know that Bonobos is a React shop as well, so I chose to use it for this project. I used component state to determine the styles applied as well as enable and disable functionality as needed. For an app this small, React may have been overkill, but it's always enjoyable.

I had some difficulties with Firefox in the end. Panning came together very quickly for the other desktop browsers, but Firefox doesn't handle drag events as intuitively as the others do. I ended up putting together a less-than-ideal solution that provides the functionality that was requested, at the cost of smooth transitions. If I could do it again, I'd dig into how to better set up and trigger drag events in Firefox. Unfortunately, I was unable to get panning to work in IE11 and Edge before submitting this, so that would be a high-priority fix for me as well.

In a true production environment, I might redesign this as a higher-order component to provide any image element with zooming and panning capabilities. I could also see the benefits of mobile-first development as I worked on this, so I would love to continue to incorporate that approach to my frontend work.

Thanks for the fun (and very appropriate) challenge!
