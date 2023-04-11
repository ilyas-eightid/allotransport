const GlobalQuery = `query Layout {
    layout {
      data {
        attributes {
          Navbar {
            Logo {
              data {
                attributes {
                  url
                }
              }
            }
            Description
            Menu {
              title
              href
            }
          }
        }
      }
    }
  }`;

export default GlobalQuery;