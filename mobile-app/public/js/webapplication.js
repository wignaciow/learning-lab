var vue = new Vue({
    el: '#app',
    data: {
        show: "home",
        teams: ["U1", "U2", "U3", "U4", "U5", "U6"],
        selectedTeam: "All Teams",
        selectedTeamTwo: "All Teams",
        filterUpcoming: [],
        filteredGameNext: [],
        filteredGameSeason: [],
        fieldList: [],
        chatId: "",
        userLoggedIn: false,
        mensaje: '',
        mensajes: [],
        userEmail: '',
        userPassword: '',
        gamesData: [
            {
                month: "september",
                Dates: "09/01",
                Teams: "U1 x U4",
                Times: " 09:30 a.m.",
                Location: "AJ Katzenmaier",
                Address: "24 W. Walton St., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
                Id: "1",
                LocId: "A",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "U3 x U2",
                Times: "13:00 p.m.",
                Location: "Greenbay",
                Address: "1734 N. Orleans St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
                Id: "2",
                LocId: "B",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "U5 x U6",
                Times: "09:30 a.m.",
                Location: "Howard A Yeager",
                Address: "2245 N. Southport Ave., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
                Id: "3",
                LocId: "C",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/08",
                Teams: "U6 x U1",
                Times: "13:00 p.m.",
                Location: "Marjorie P Hart",
                Address: "2625 N. Orchard St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
                Id: "4",
                LocId: "D",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/08",
                Teams: "U2 x U4",
                Times: "09:30 a.m.",
                Location: "North",
                Address: "1409 N. Ogden Ave., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
                Id: "5",
                LocId: "E",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/08",
                Teams: "U3 x U5",
                Times: "13:00 p.m.",
                Location: "AJ Katzenmaier",
                Address: "24 W. Walton St., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
                Id: "6",
                LocId: "A",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/15",
                Teams: "U1 x U3",
                Times: "09:30 a.m.",
                Location: "South",
                Address: "2101 N. Fremont St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
                Id: "7",
                LocId: "F",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/15",
                Teams: "U2 x U6",
                Times: "13:00 p.m.",
                Location: "Howard A Yeager",
                Address: "2245 N. Southport Ave., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
                Id: "8",
                LocId: "C",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/15",
                Times: "09:30 a.m.",
                Teams: "U4 x U5",
                Location: "Greenbay",
                Address: "1734 N. Orleans St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
                Id: "9",
                LocId: "B",
                Chat: []
                },
            {
                month: "october",
                Dates: "09/27",
                Teams: "U2 x U5",
                Times: "09:30 a.m.",
                Location: "Marjorie P Hart",
                Address: "2625 N. Orchard St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
                Id: "10",
                LocId: "D",
                Chat: []
                },
            {
                month: "october",
                Dates: "09/27",
                Teams: "U1 x U6",
                Times: "13:00 p.m.",
                Location: "South",
                Address: "2101 N. Fremont St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.7479505250676!2d-87.65355538511241!3d41.91977677921889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148227043!5m2!1ses-419!2sar",
                Id: "11",
                LocId: "F",
                Chat: []
                },
            {
                month: "october",
                Dates: "09/27",
                Teams: "U3 x U4",
                Times: "09:30 a.m.",
                Location: "Howard A Yeager",
                Address: "2245 N. Southport Ave., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
                Id: "12",
                LocId: "C",
                Chat: []
                },
            {
                month: "october",
                Dates: "10/06",
                Teams: "U5 x U1",
                Times: "13:00 p.m.",
                Location: "Greenbay",
                Address: "1734 N. Orleans St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
                Id: "13",
                LocId: "B",
                Chat: []
                },
            {
                month: "october",
                Dates: "10/06",
                Teams: "U6 x U3",
                Times: "09:30 a.m.",
                Location: "North",
                Address: "1409 N. Ogden Ave., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
                Id: "14",
                LocId: "E",
                Chat: []
                },
            {
                month: "october",
                Dates: "10/06",
                Teams: "U2 x U4",
                Times: "13:00 p.m.",
                Location: "Marjorie P Hart",
                Address: "2625 N. Orchard St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
                Id: "15",
                LocId: "D",
                Chat: []
                },
            {
                month: "october",
                Dates: "10/13",
                Teams: "U3 x U1",
                Times: "09:30 a.m.",
                Location: "AJ Katzenmaier",
                Address: "24 W. Walton St., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
                Id: "16",
                LocId: "A",
                Chat: []
                },
            {
                month: "october",
                Dates: "10/13",
                Teams: "U2 x U6",
                Times: "13:00 p.m.",
                Location: "Howard A Yeager",
                Address: "2245 N. Southport Ave., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
                Id: "17",
                LocId: "C",
                Chat: []
                },
            {
                month: "october",
                Dates: "10/13",
                Teams: "U5 x U4",
                Times: "09:30 p.m.",
                Location: "Marjorie P Hart",
                Address: "2625 N. Orchard St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
                Id: "18",
                LocId: "D",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "K1 x K4",
                Times: " 09:30 a.m.",
                Location: "AJ Katzenmaier",
                Address: "24 W. Walton St., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
                Id: "19",
                LocId: "A",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "K3 x K2",
                Times: "13:00 p.m.",
                Location: "Greenbay",
                Address: "1734 N. Orleans St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.0256986745258!2d-87.64002798526307!3d41.913806271159174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575055703462!5m2!1ses-419!2sar",
                Id: "20",
                LocId: "B",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "K5 x K6",
                Times: "09:30 a.m.",
                Location: "Howard A Yeager",
                Address: "2245 N. Southport Ave., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5854973846654!2d-87.66511458526271!3d41.92326857056656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575056164148!5m2!1ses-419!2sar",
                Id: "21",
                LocId: "C",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "M6 x M1",
                Times: "13:00 p.m.",
                Location: "Marjorie P Hart",
                Address: "2625 N. Orchard St., Chicago, IL 60614",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658433!2d-87.64808628511203!3d41.929578279218106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148006975!5m2!1ses-419!2sar",
                Id: "22",
                LocId: "D",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "M2 x M4",
                Times: "09:30 a.m.",
                Location: "North",
                Address: "1409 N. Ogden Ave., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.3377998492138!2d-87.64837698511293!3d41.907096479219845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33af0e6ccc3%3A0x26c81c1d557667da!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575148146827!5m2!1ses-419!2sar",
                Id: "23",
                LocId: "E",
                Chat: []
                },
            {
                month: "september",
                Dates: "09/01",
                Teams: "M3 x M5",
                Times: "13:00 p.m.",
                Location: "AJ Katzenmaier",
                Address: "24 W. Walton St., Chicago, IL 60610",
                Details: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.654060426145!2d-87.63123908526362!3d41.9002963720051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1575053660400!5m2!1ses-419!2sar",
                Id: "24",
                LocId: "A",
                Chat: []
                }
            ],
        upcomingGamesDate: '09/01'//Puede ser una funcion que busque la fecha proxima en relacion al dia de hoy.
    },
    methods: {
        display: function (page) {
            this.show = page;
        },
        upcoming: function () {
            this.filterUpcoming = [];
            for (var i = 0; i < vue.gamesData.length; i++) {
                if (vue.gamesData[i].Dates.includes(vue.upcomingGamesDate)) {
                    this.filterUpcoming.push(vue.gamesData[i]);
                }
            }
        },
        filterTeamNext: function () {
            this.filteredGameNext = [];
            for (var i = 0; i < vue.filterUpcoming.length; i++) {
                if (vue.filterUpcoming[i].Teams.includes(this.selectedTeam) || this.selectedTeam == "All Teams") {
                    this.filteredGameNext.push(vue.filterUpcoming[i])
                }
            }
        },
        filterTeamSeason: function () {
            this.filteredGameSeason = [];
            for (var i = 0; i < vue.gamesData.length; i++) {
                if (vue.gamesData[i].Teams.includes(this.selectedTeamTwo) || this.selectedTeamTwo == "All Teams") {
                    this.filteredGameSeason.push(vue.gamesData[i])
                }
            }
        },
        field: function () {
            var fieldAll = [];
            var fields = [];
            for (var i = 0; i < vue.gamesData.length; i++) {
                if (fieldAll[vue.gamesData[i].Location] === undefined) {
                    fieldAll[vue.gamesData[i].Location] = 1;
                    fields.push(vue.gamesData[i]);
                }
            }
            vue.fieldList = fields;
        },
        send: function () {
            var postData = {
                texto: vue.mensaje,
                email: firebase.auth().currentUser.email
            };
            var updates = {
                //"mesajes/1": postData
            };
            updates['/mensajes/' + this.mensajes.length] = postData;

            firebase.database().ref().update(updates).then(function (result) {
                console.log("mensaje enviado")
            });
        },
        login: function () {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider);
        },
        register: function () {
            firebase.auth().createUserWithEmailAndPassword(vue.userEmail, vue.userPassword)
                .then(function () {
                    console.log("cuenta creada");
                })
                .catch(function (error) {
                    console.log("error papa" + error)
                })
        },
        loginEmail: function () {
            firebase.auth().signInWithEmailAndPassword(vue.userEmail, vue.userPassword)
                .then(function () {
                    console.log("cuenta logueada");
                })
                .catch(function (error) {
                    console.log("error de login" + error)
                })
        }
    }
})

vue.upcoming();
vue.field();

window.addEventListener('load', () => {
    let long;
    let lat;
    let data;

    let iconImage = new Image();
    let locationTimezone = document.querySelector("#location_timezone");
    let tempDescription = document.querySelector("#temp_description");
    let tempDegree = document.querySelector("#temp_degree");

    let iconImageTwo = new Image();
    let locationTimezoneTwo = document.querySelector("#location_timezoneTwo");
    let tempDescriptionTwo = document.querySelector("#temp_descriptionTwo");
    let tempDegreeTwo = document.querySelector("#temp_degreeTwo");


    if (navigator) {
        long = -87.627778;
        lat = 41.881944;

        const api = `http://api.weatherapi.com/v1/forecast.json?key=db5d332edd014d29aa1175108201908&q=${lat},${long}`;

        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(function (json) {
                data = json;
                console.log(data);
                //set DOM elements from the API
                locationTimezone.textContent = data.location.tz_id;
                tempDescription.textContent = data.current.condition.text;
                tempDegree.textContent = data.current.temp_c;
                iconImage.src = "https:" + data.current.condition.icon;
                locationTimezoneTwo.textContent = data.location.tz_id;
                tempDescriptionTwo.textContent = data.forecast.forecastday[0].day.condition.text;
                tempDegreeTwo.textContent = data.forecast.forecastday[0].day.avgtemp_c;
                iconImageTwo.src = "https:" + data.forecast.forecastday[0].day.condition.icon;
            })
        /*console.log(iconImage);*/
        document.getElementById("w_icon").appendChild(iconImage);
        document.getElementById("w_iconTwo").appendChild(iconImageTwo);

    } else {
        h1.textContent = "Geolocation not working"
    }
});
