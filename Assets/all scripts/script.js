// by the name of ALLAH


//slider side menu bar settings 
// https://www.jqueryscript.net/menu/off-canvas-sidebar-panel.html
$("#sidebar-left").simplerSidebar({
  align: "left", // default: 'right'
  selectors: {
    trigger: "#toggle-sidebar-left",
    quitter: ".quit-sidebar-left"
  }
});
$("#sidebar-left").simplerSidebar({
  mask: {
    display: true,
    css: {
      backgroundColor: "black",
      opacity: 0.5,
      filter: "Alpha(opacity=50)",
    }
  }
});
$("#sidebar-left").simplerSidebar({
  animation: {
    duration: 10,
    easing: "swing"
  }
});
$("#sidebar-left").simplerSidebar({
  sidebar: {
    width: 300,
  }
});
$("#sidebar-left").simplerSidebar({
  events: {
    on: {
      animation: {
        open: function () {},
        close: function () {},
        both: function () {},
      },
    },
    callbacks: {
      animation: {
        open: function () {},
        close: function () {},
        both: function () {},
        freezePage: true,
      },
    },
  }
});
$("#sidebar-left").simplerSidebar({
  attr: "simplersidebar",
  top: 0,
  gap: 64,
  zIndex: 3000
});
//slider side menu bar settings end

