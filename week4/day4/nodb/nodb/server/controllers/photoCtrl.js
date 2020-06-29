

let photo = [
    {id: 1,
    title: 'Spacex Demo-2 Launch',
    url: 'https://apod.nasa.gov/apod/image/2006/demo-2_crewedlaunchIR1100.jpg'
    },
    {id: 2,
    title: 'Barred Spiral Galaxy NGC 1300',
    url: 'https://apod.nasa.gov/apod/image/2006/NGC1300HST1200.jpg'
    },
    {id: 3,
    title: 'Center of Lagoon Nebula',
    url: 'https://apod.nasa.gov/apod/image/2006/LagoonCenter_HubbleGravinese_960.jpg'
    },
    {id: 4,
    title: 'South of Carina',
    url: 'https://apod.nasa.gov/apod/image/2005/SouthCarina_SHO_final1024.jpg'
    },
    {id: 5,
    title: 'Mystic Mountain Monster Nebula',
    url: 'https://apod.nasa.gov/apod/image/2005/MysticPillar_HubbleSchmidt_960.jpg'    
    },
    {id: 6,
    title: 'Fresh Tiger Stripes on Enceladus',
    url: 'https://apod.nasa.gov/apod/image/2004/enceladusstripes_cassini_960.jpg'
    },
    {id: 7,
    title: 'The Rosetta Nebula',
    url: 'https://apod.nasa.gov/apod/image/1702/Rosette_Souglakos_960.jpg'
    }
]



module.exports = {

    getPhoto: (req, res) => {

    res.status(200).send(photo)
        }
    }
