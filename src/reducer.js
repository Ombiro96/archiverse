const initialState = {
    links: [
      { url: '/home', label: 'Home' },
      { url: '/contact', label: 'Contact' },
      { url: '/projects', label: 'Projects' },
      { url: '/blog', label: 'Blog' },
      { url: '/about-us', label: 'About Us' }
    ]
  };
  
  function reducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  
  export default reducer;
  