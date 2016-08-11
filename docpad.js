module.exports = {

  prompts: false,

  // These are variables will be accessible via our templates
  templateData: {

    // Conference info
    conf: {
      name: "Bridges Over Troubled Water",
      description: "Die Konstitution von Netzwerken im Innovationsprozess",
      date: "13. und 14. Oktober 2016",
      // If your event is free, just comment this line
      // price: "$100",
      venue: "TU Berlin",
      subvenue: "Innovationsgesellschaft heute",
      address: "Fraunhoferstraße 33-36",
      postal: "10587",
      city: "Berlin",
      state: "Germany"
    },

    // The Call To Action button at the header,
    // If you don't want this, just remove the callToAction property.
    callToAction: {
        text: "Call als PDF",
        link: "call.pdf"
    },

    // "Fork me on GitHub", if you don't want this, just remove the forkButton property
    // forkButton: {
    //    repository: "https://github.com/braziljs/conf-boilerplate"
    // },

    // Site info
    site: {
      theme: "yellow-swan",
      url: "http://braziljs.github.io/conf-boilerplate/",
      googleanalytics: "UA-740721-18"
    },

    // Active sections on the website
    // to deactivate comment out with '//'
    // you can also change order here and it will reflect on page
    sections: [
      'about',
      'location',
      'talks',
      //'speakers',
      //'schedule',
      //'sponsors',
      //'partners'
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Workshopthema",
      location: "Ort",
      speakers: "Speakers",
      schedule: "Schedule",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Teilnahme",
      talks: "Vorträge"
    },

    // Talkes
    talks: [{"title":"Eröffnungsvortrag: Netzwerke und Innovation","name":"Prof. Dr. Arnold Windeler","affiliation":"TU Berlin"},
{"title":"Innovationspfade und Ingenieurswissenschaften","name":"Dr. Uli Meyer","affiliation":"MCTS München"},
{"title":"Die reflexive Konstitution von Technologieentwicklung auf Konferenzen","name":"Nils Döring","affiliation":"TU Berlin"},
{"title":'"Das nächste große Ding" - Messen und Märkte als Orte der Ausverhandlung von Innovationen',"name":"Dr. Christoph Musik","affiliation":"FH St. Pölten"},
{"title":"Collaborating within and across the organizational boundary of a Synchrotron facility: Innovation at structural folds","name":"Dr. Florian Stache und Andrey Indukaev","affiliation":"FU Berlin und École Normale Supérieure Cachan"},
{"title":"Koordination im Schatten des Marktes: Brauchbare Fiktionen und Mikrologiken marktlicher Governance in kollaborativen Innovationsprozessen","name":"Dr. André Ortiz","affiliation":"Universität Oldenburg"},
{"title":"Situationen und ihre Menschen - Die praktische Konstitution informeller Wissensflüsse in Forschung und Entwicklung","name":"Philip Roth","affiliation":"Fraunhofer ISI, Karlsruhe"},
{"title":"How start-up ecosystems shape new venture creation in favor of project-like organizing","name":"Carolin Auschra und Dr. Thomas Schmidt","affiliation":"FU Berlin"},
{"title":"Innovationsspezifische Netzwerkbildung von Start-ups im Gründungsprozess","name":"Katharina Scheidgen","affiliation":"TU Berlin"},
{"title":"Network Ethnography","name":"Dr. Olivier Berthod","affiliation":"FU Berlin"},
{"title":"Netzwerke praxeologisch gedacht. Versuch einer Brücke zwischen der dokumentarischen Methode und Harrison Whites Netzwerktheorie","name":"Julian Wolf","affiliation":"Universität Witten/Herdecke"},
{"title":"Network strategies to stimulate the knowledge transfer in science-based clusters: A conceptual framework for cluster management applied to green technology","name":"Georg Reischauer","affiliation":"Hertie School of Governance, Berlin"},
{"title":"Trans-sectoral cooperation: Power-to-Gas actor constellations in Germany","name":"Lena F. Burchartz","affiliation":"TU Berlin"},
{"title":"Netzwerke für innovative Stadtentwicklung","name":"Ariane Sept","affiliation":"TU Berlin"},
{"title":"Innovationsnetzwerke - Der Fall der Elektromobilität in Nordfriesland","name":"Henry Johns","affiliation":"Leibniz Universität Hannover"},
{"title":"Spielarten des Wissenskapitalismus - Über den Einfluss institutioneller Arrangements auf Innovationen. Am Beispiel der Grünen Biotechnologie.","name":"Dr. Barbara Brandl","affiliation":"Universität Trier"}],

    // The entire schedule
    schedule: [
      {
        name: "Check-in / Breakfast",
        time: "9h00"
      },
      {
        name: "Linus Torvalds",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Linux Foundation",
        link: {
          href: "http://twitter.com/linus",
          text: "@linus"
        },
        presentation: {
          title: "Digging into a Linux Kernel",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "10h00"
        }
      },
      {
        name: "Bill Gates",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Microsoft",
        link: {
          href: "http://github.com/billy95",
          text: "@billy95"
        },
        presentation: {
          title: "Introducing Windows 12",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "11h00"
        }
      },
      {
        name: "Lunch",
        time: "12h00"
      },
      {
        name: "Chuck Norris",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Delta Command",
        link: {
          href: "http://twitter.com/littlechuck",
          text: "@littlechuck"
        },
        presentation: {
          title: "How to kill a elephant with one finger",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "13h00"
        }
      },
      {
        name: "Steve Jobs",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://github.com/stevie",
          text: "@stevie"
        },
        presentation: {
          title: "Presenting iPad",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "14h00"
        }
      },
      {
        name: "Coffee-break",
        time: "15h00"
      },
      {
        name: "Mark Zuckerberg",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Facebook",
        link: {
          href: "http://twitter.com/zuck",
          text: "@zuck"
        },
        presentation: {
          title: "Revealing Facebook Secrets",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "16h00"
        }
      },
      {
        name: "Steve Wozniak",
        photo: "themes/yellow-swan/img/speaker.jpg",
        bio: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        company: "Apple, Inc.",
        link: {
          href: "http://twitter.com/woz",
          text: "@woz"
        },
        presentation: {
          title: "Why do I prefer Android over iPhone",
          description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
          time: "17h00"
        }
      }
    ],

    // List of Sponsors
    sponsors: [
      {
        name: "Eventick",
        logo: "themes/yellow-swan/img/sponsor.png",
        url: "http://eventick.com.br"
      }
    ],

    // List of Partners
    partners: [
      {
        name: "BrazilJS",
        logo: "themes/yellow-swan/img/partner.png",
        url: "http://braziljs.org"
      }
    ],

    // Theme path
    getTheme: function() {
      return "themes/" + this.site.theme;
    },

    // Site Path
    getUrl: function() {
    	return this.site.url;
    }
  }
};
