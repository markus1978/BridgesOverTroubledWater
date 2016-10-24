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
        text: "Programm als PDF",
        link: "programm.pdf"
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
      'schedule',
      //'talks',
      'location',
      //'speakers',
      //'sponsors',
      //'partners'
      'contact'
    ],

    // Labels which you can translate to other languages
    labels: {
      about: "Thema",
      location: "Ort",
      speakers: "Speakers",
      schedule: "Programm",
      sponsors: "Sponsors",
      partners: "Partners",
      contact: "Teilnahme",
      talks: "Beiträge"
    },

    // Talkes
    talks: [
{"title":"Eröffnungsvortrag: Netzwerke und Innovation","name":"Prof. Dr. Arnold Windeler","affiliation":"TU Berlin"},
{"title":"Innovationspfade und Ingenieurswissenschaften","name":"Dr. Uli Meyer","affiliation":"MCTS München"},
{"title":"Die reflexive Konstitution von Technologieentwicklung auf Konferenzen","name":"Nils Döring","affiliation":"TU Berlin"},
{"title":'"Das nächste große Ding" - Messen und Märkte als Orte der Ausverhandlung von Innovationen',"name":"Dr. Christoph Musik","affiliation":"FH St. Pölten"},
{"title":"Collaborating within and across the organizational boundary of a Synchrotron facility: Innovation at structural folds","name":"Dr. Florian Stache und Andrey Indukaev","affiliation":"FU Berlin und École Normale Supérieure Cachan"},
{"title":"Koordination im Schatten des Marktes: Brauchbare Fiktionen und Mikrologiken marktlicher Governance in kollaborativen Innovationsprozessen","name":"Dr. André Ortiz","affiliation":"InWIS Bochum, zuvor Universität Oldenburg"},
{"title":"Situationen und ihre Menschen - Die praktische Konstitution informeller Wissensflüsse in Forschung und Entwicklung","name":"Philip Roth","affiliation":"Fraunhofer ISI, Karlsruhe"},
{"title":"How start-up ecosystems shape new venture creation in favor of project-like organizing","name":"Carolin Auschra und Dr. Thomas Schmidt","affiliation":"FU Berlin"},
{"title":"Innovationsspezifische Netzwerkbildung von Start-ups im Gründungsprozess","name":"Katharina Scheidgen","affiliation":"TU Berlin"},
{"title":"Network Ethnography","name":"Dr. Olivier Berthod","affiliation":"FU Berlin"},
{"title":"Netzwerke praxeologisch gedacht. Versuch einer Brücke zwischen der dokumentarischen Methode und Harrison Whites Netzwerktheorie","name":"Julian Wolf","affiliation":"Universität Witten/Herdecke"},
{"title":"Network strategies to stimulate the knowledge transfer in science-based clusters: A conceptual framework for cluster management applied to green technology","name":"Georg Reischauer","affiliation":"Hertie School of Governance, Berlin"},
{"title":"Trans-sectoral cooperation: Power-to-Gas actor constellations in Germany","name":"Lena F. Burchartz","affiliation":"TU Berlin"},
{"title":"Netzwerke für innovative Stadtentwicklung","name":"Ariane Sept","affiliation":"TU Berlin"},
{"title":"Innovationsnetzwerke - Der Fall der Elektromobilität in Nordfriesland","name":"Henry Johns","affiliation":"Leibniz Universität Hannover"}],

    // The entire schedule
    schedule: [
      {
        day: "Donnerstag, 13. Oktober",
        sessions: [
          {
            time: "9:30-10:00",
            name: "Ankunft und Anmeldung"
          },
          {
            time: "10:00-10:15",
            name: "Begrüßung",

          },
          {
            time: "10:15-11:45",
            talks: [
              {
                "title": "Eröffnungsvortrag: Netzwerke und Innovation",
                "name": "Prof. Dr. Arnold Windeler",
                "affiliation": "TU Berlin"
              },
              {
                "title": " Collaborating within and across the organizational boundary of a Synchrotron facility: Innovation at structural folds",
                "name": "Dr. Florian Stache, Andrey Indukaev",
                "affiliation": " FU Berlin und École Normale Supérieure Cachan ",
                "slides" : "slides/Stache.pdf"
              },

            ]
          },
          {
            time: "11:45-12:45",
            name: "Mittagspause",

          },
          {
            time: "12:45-14:15",
            talks: [
              {
                "title": "Situationen und ihre Menschen - Die praktische Konstitution informeller Wissensflüsse in Forschung und Entwicklung",
                "name": "Philip Roth",
                "affiliation": "Fraunhofer ISI, Karlsruhe"
              },
              {
                "title": "Koordination im Schatten des Marktes: Brauchbare Fiktionen und Mikrologiken marktlicher Governance in kollaborativen Innovationsprozessen",
                "name": "Dr. André Ortiz",
                "affiliation": "InWIS Bochum, zuvor Universität Oldenburg"
              },

            ]
          },
          {
            time: "14:15-14:30",
            name: "Kaffeepause",

          },
          {
            time: "14:30-15:30",
            name: "Postersession",
            talks: [
              {
                "title": "Network strategies to stimulate the knowledge transfer in science-based clusters: A conceptual framework for cluster management applied to green technology",
                "name": "Georg Reischauer",
                "affiliation": "Hertie School of Governance, Berlin"
              },
              {
                "title": " Trans-sectoral cooperation: Power-to-Gas actor constellations in Germany",
                "name": "Lena F. Burchartz",
                "affiliation": " TU Berlin"
              },
              {
                "title": " Netzwerke für innovative Stadtentwicklung",
                "name": "Ariane Sept",
                "affiliation": " TU Berlin"
              },
              {
                "title": " Innovationsnetzwerke - Der Fall der Elektromobilität in Nordfriesland",
                "name": "Henry Johns",
                "affiliation": " Leibniz Universität Hannover",
                "slides": "slides/Johns.pdf"
              },

            ]
          },
          {
            time: "15:30-15:45",
            name: "Kaffeepause",

          },
          {
            time: "15:45-17:15",
            name: "Methodologische Ansätze",
            talks: [
              {
                "title": "Netzwerke praxeologisch gedacht. Versuch einer Brücke zwischen der dokumentarischen Methode und Harrison Whites Netzwerktheorie",
                "name": "Julian Wolf",
                "affiliation": "Universität Witten/Herdecke"
              },
              {
                "title": " Network Ethnography",
                "name": "Dr. Olivier Berthod",
                "affiliation": " FU Berlin"
              },

            ]
          },
          {
            time: "ab 18:00",
            name: "Gemeinsames Abendessen im Cafè Hardenberg",

          },

        ]
      },
      {
        day: "Freitag, 14. Oktober",
        sessions: [
          {
            time: "10:00-12:15",
            name: "Die Aushandlung von Innovationspfaden",
            talks: [
              {
                "title": "Innovationspfade und Ingenieurswissenschaften",
                "name": "Dr. Uli Meyer",
                "affiliation": "MCTS München"
              },
              {
                "title": " Die reflexive Konstitution von Technologieentwicklung auf Konferenzen",
                "name": "Nils Döring",
                "affiliation": " TU Berlin"
              },
              {
                "title": " Das nächste große Ding - Messen und Märkte als Orte der Ausverhandlung von Innovationen",
                "name": "Dr. Christoph Musik",
                "affiliation": " FH St. Pölten"
              },

            ]
          },
          {
            time: "12:15-13:15",
            name: "Mittagspause"
          },
          {
            time: "13:15-14:45",
            name: "Start-ups und ihre Netzwerke",
            talks: [
              {
                "title": "Innovationsspezifische Netzwerkbildung von Start-ups im Gründungsprozess",
                "name": "Katharina Scheidgen",
                "affiliation": "TU Berlin"
              },
              {
                "title": " How start-up ecosystems shape new venture creation in favor of project-like organizing",
                "name": "Carolin Auschra und Dr. Thomas Schmidt",
                "affiliation": " FU Berlin"
              },
            ]
          },
          {
            time: "14:45-15:00",
            name: "Kaffeepause"
          },
          {
            time: "15:00-16:00",
            name: "Abschlussdiskussion",
            slides: "slides/Glaeser.pdf"
          },
        ]
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
