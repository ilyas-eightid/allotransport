const GlobalQuery = `
query Layout {
  layout {
    data {
      attributes {
        Navbar {
          SiteName
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
          Button {
            Title
            Href
            Type
          }
        }
        Footer {
          FooterLogo {
            data {
              attributes {
                url
              }
            }
          }
          SubLogo
          Button {
            Title
            Href
            Type
          }
          SocialLinks {
            Title
            Href
          }
          FooterWidgetLinks {
            Title
            Links {
              title
              href
            }
          }
          FooterWidgets {
            Title
            Content
          }
          Copyright
        }
      }
    }
  }
}
`;



export default GlobalQuery;


