var config = {
    style: 'mapbox://styles/heyrice/cm7lru6hw00ui01sig8uhh1ll',
    accessToken: 'pk.eyJ1IjoiaGV5cmljZSIsImEiOiJja3ZseDdsMzgwcDl3MnZ1cHJ2N2o3amx0In0.RSDQieJGqK88B6LFaNfquQ',
    showMarkers: false,
    markerColor: '#D1F8EF',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'When was the last time you visited a wet market?',
    subtitle: 'Exploring stagnating Singaporean wet markets spatially',
    byline: 'By Zann Lee',
    footer: 'Source: Authors own, <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'right',
            hidden: false,
            title: 'Where do people buy groceries from?',
            image: './assets/WM.jpg',
            description: 'A NEA survey revealed that a decreasing number of Singaporeans go to wet markets. The most common reason it is more convenient to purchase groceries from supermarkets. This visualisation explores the spatial distribution of wet markets and supermarkets to understand this phenomenon. The first map shows the distribution of wet markets and supermarkets. <br><br><img src="./assets/dist WM SM.png" style="height:100%; width:200px;"></img>',
            location: {
                center: [103.79304, 1.35969],
                zoom: 10.5,
                pitch: 0,
                bearing: 0
            }, 
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                     layer: 'distribution of SM',
                     opacity: 1
                },
                {
                    layer:'distribution of WM',
                    opacity:1
                },
                {
                    layer:'popdensity',
                    opacity:0
                },
                {
                    layer:'residential in 400m SM',
                    opacity:0
                },
                {
                    layer:'residential in 400m WM',
                    opacity:0
                },

            ],
            onChapterExit: [
                {
                    layer: 'distribution of SM',
                    opacity: 1
               },
               {
                   layer:'distribution of WM',
                   opacity:1
               },
               {
                   layer:'popdensity',
                   opacity:0
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Do you live near a wet market?',
            image: './assets/fish.jpg',
            description: 'This map overlays the distribution of supermarkets and wet markets with population density. Supermarkets are well distributed in Singapore, ensuring widespread accessibility. <br><br><img src="./assets/popdensity.png" style="height:100%; width:200px;"></img> ',
            location: {
                center: [103.83142, 1.36371],
                zoom: 10.53,
                pitch: 12.50,
                bearing: 0
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 5, // make the flying slow
               // curve: 0.3, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'distribution of SM',
                    opacity: 1
               },
               {
                   layer:'distribution of WM',
                   opacity:1
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ],
            onChapterExit: [
                {
                    layer: 'distribution of SM',
                    opacity: 0.5
               },
               {
                   layer:'distribution of WM',
                   opacity:0.5
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ]
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Why are wet markets more clustered in low-density areas?',
            image: './assets/veg.jpg',
            description: 'There are more wet markets in central areas with a lower population density. <br><br><img src="./assets/popdensity.png" style="height:100%; width:200px;"></img> ',
            location: {
                center: [103.85112, 1.28671],
                zoom: 12.75,
                pitch: 58.50,
                bearing: 0.00,
                speed: 3,
                curve: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'distribution of SM',
                    opacity: 1
               },
               {
                   layer:'distribution of WM',
                   opacity:1
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ],
            onChapterExit: [
                {
                    layer: 'distribution of SM',
                    opacity: 0.5
               },
               {
                   layer:'distribution of WM',
                   opacity:0.5
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Fewer wet markets in the heartlands',
            image: './assets/WM.jpg',
            description: 'In medium to densely populated heartlands, there are fewer wet markets. Does this indicate a mismatch between demand and supply?  <br><br><img src="./assets/popdensity.png" style="height:100%; width:200px;"></img>  ',
            location: {
                center: [103.87854, 1.38001],
                zoom: 13.57,
                pitch: 48.50,
                bearing:-8.80,
                speed: 2,
                curve: 2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'distribution of SM',
                    opacity: 1
               },
               {
                   layer:'distribution of WM',
                   opacity:1
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ],
            onChapterExit: [
                {
                    layer: 'distribution of SM',
                    opacity: 0.8
               },
               {
                   layer:'distribution of WM',
                   opacity:0.8
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Accessibility comparison in Choa Chu Kang',
            image: './assets/fish.jpg',
            description: 'In one of the most densely populated neighbourhood, more HDBs fall within a 400m walking distance of supermarkets compared to wet markets, highlighting potential accessibility disparities. <br><br><img src="./assets/400m WM SM.png" style="height:100%; width:200px;"></img> ',
            location: {
                center: [103.75389, 1.38857],
                zoom: 13.65,
                pitch: 28,
                bearing: -56.44,
                speed: 2,
                curve:2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'distribution of SM',
                    opacity: 0
               },
               {
                   layer:'distribution of WM',
                   opacity:0
               },
               {
                   layer:'popdensity',
                   opacity:0.5
               },
               {
                   layer:'residential in 400m SM',
                   opacity:1
               },
               {
                   layer:'residential in 400m WM',
                   opacity:1
               }
            ],
            onChapterExit: [
                {
                    layer: 'distribution of SM',
                    opacity: 0
               },
               {
                   layer:'distribution of WM',
                   opacity:0
               },
               {
                   layer:'popdensity',
                   opacity:0
               },
               {
                   layer:'residential in 400m SM',
                   opacity:0
               },
               {
                   layer:'residential in 400m WM',
                   opacity:0
               }
            ]
        }
    ]
}


