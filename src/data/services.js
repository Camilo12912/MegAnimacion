
import {
    FaChild, FaBaby, FaMasksTheater, FaMusic, FaVolumeHigh,
    FaVolumeLow, FaHeadphones, FaMicrophone, FaMicrophoneLines,
    FaBookOpen, FaPuzzlePiece, FaFutbol, FaWater,
    FaWandMagicSparkles, FaGift, FaClock, FaCar,
    FaUtensils, FaBriefcase, FaChair, FaGhost, FaSnowflake
} from 'react-icons/fa6';

export const servicesData = {
    // === CATEGORÍAS PRINCIPALES ===
    'modal-infantil': {
        title: 'Animación infantil y sonido',
        icon: 'FaChild',
        description: 'Selecciona una de nuestras experiencias MegA:',
        options: [
            { id: 'modal-fiesta-infantil', label: 'Fiesta Infantil', icon: 'FaChild', colorClass: 'text-blue-500' },
            { id: 'modal-baby-fiesta', label: 'Baby Fiesta', icon: 'FaBaby', colorClass: 'text-pink-400' }
        ],
        notes: [
            { icon: 'FaGift', text: '<b>Por la compra de cualquier servicio</b> te obsequiamos la tarjeta de invitación personalizada.' },
            { icon: 'FaClock', text: '<b>Duración:</b> entre 1 y 3 horas según el servicio contratado.' },
            { icon: 'FaCar', text: '<b>Nota de transporte:</b> cubre solo el casco urbano de Cúcuta. Lugares aledaños tienen costo adicional.' },
            { icon: 'FaBaby', text: '<b>Recomendación:</b> toma en cuenta la cantidad de niños para una mejor experiencia.' }
        ]
    },
    'modal-juvenil': {
        title: 'Animación juvenil',
        icon: 'FaHeadphones',
        description: 'Selecciona una de nuestras experiencias MegA juveniles:',
        options: [
            { id: 'modal-juvenil-solo', label: 'Solo animación', icon: 'FaMicrophoneLines' },
            { id: 'modal-juvenil-mediano', label: 'Animación con sonido mediano', icon: 'FaVolumeLow' },
            { id: 'modal-juvenil-completo', label: 'Animación con sonido completo', icon: 'FaHeadphones' },
            { id: 'modal-juvenil-deportiva', label: 'Fiesta deportiva', icon: 'FaFutbol' },
            { id: 'modal-juvenil-acuatica', label: 'Fiesta acuática', icon: 'FaWater' },
            { id: 'modal-juvenil-reguetoneros', label: 'Personajes reguetoneros', icon: 'FaMusic' },
            { id: 'modal-juvenil-glitter', label: 'Maquillaje glitter neón y tatuajes', icon: 'FaWandMagicSparkles' }
        ],
        notes: [
            { icon: 'FaClock', text: '<b>Duración:</b> entre 1 y 3 horas según el servicio contratado.' },
            { icon: 'FaCar', text: '<b>Nota de transporte:</b> cubre solo el casco urbano de Cúcuta. Lugares aledaños tienen costo adicional.' },
            { icon: 'FaBaby', text: '<b>Recomendación:</b> toma en cuenta la cantidad de jovenes para una mejor experiencia.' }
        ]
    },

    // === SUB-CATEGORÍAS INFANTIL ===
    'modal-fiesta-infantil': {
        title: 'Fiesta Infantil',
        icon: 'FaChild',
        description: 'Selecciona el tipo de paquete de animación:',
        options: [
            { id: 'modal-solo-animacion', label: 'Solo Animación', icon: 'FaMasksTheater' },
            { id: 'modal-sonido-medio', label: 'Animación con sonido medio', icon: 'FaMusic' },
            { id: 'modal-sonido-completo', label: 'Animación con sonido completo', icon: 'FaVolumeHigh' }
        ]
    },
    'modal-baby-fiesta': {
        title: 'Baby Fiesta',
        icon: 'FaBaby',
        description: 'Selecciona una experiencia especial para bebés:',
        options: [
            { id: 'modal-fiesta-musical', label: 'Fiesta Musical', icon: 'FaMusic' },
            { id: 'modal-baby-sonido', label: 'Animación con sonido completo', icon: 'FaMicrophone' },
            { id: 'modal-canticuento', label: 'Canticuento sensorial', icon: 'FaBookOpen' },
            { id: 'modal-atraccion-bebes', label: 'Atracción para bebés', icon: 'FaPuzzlePiece' }
        ]
    },

    // === DETALLES DE SERVICIOS (HOJAS) ===
    // INFANTIL
    'modal-solo-animacion': {
        title: 'Solo Animación',
        icon: 'FaMasksTheater',
        description: 'Incluye recreación temática, concursos, maquillaje artístico y MegA hora loca.',
        details: [
            { label: 'Capacidad recomendada', value: 'hasta 20 niños' }
        ],
        image: '/img/servicios/portafolio solo recreacion.jpeg'
    },
    'modal-sonido-medio': {
        title: 'Animación con sonido medio',
        icon: 'FaMusic',
        description: 'Incluye animación completa con sonido intermedio, micrófono y música personalizada.',
        details: [
            { label: 'Capacidad recomendada', value: 'hasta 30 niños' }
        ],
        image: '/img/servicios/sonido-medio.jpg'
    },
    'modal-sonido-completo': {
        title: 'Animación con sonido completo',
        icon: 'FaVolumeHigh',
        description: 'Incluye animación profesional, sonido completo, luces LED y música temática.',
        details: [
            { label: 'Capacidad recomendada', value: 'hasta 50 niños' }
        ],
        image: '/img/servicios/sonido-completo.jpg'
    },

    // BABY
    'modal-fiesta-musical': {
        title: 'Fiesta Musical',
        icon: 'FaMusic',
        description: 'Show interactivo con canciones infantiles, burbujas y actividades de expresión corporal.',
        details: [
            { label: 'Valor', value: '$850.000' }
        ],
        image: '/img/servicios/fiesta-musical.jpg'
    },
    'modal-baby-sonido': {
        title: 'Animación con sonido completo',
        icon: 'FaMicrophone',
        description: 'Animación especial para bebés con música suave, micrófono, juegos y personajes tiernos.',
        details: [
            { label: 'Valor', value: '$500.000' }
        ],
        image: '/img/servicios/baby-sonido.jpg'
    },
    'modal-canticuento': {
        title: 'Canticuento sensorial',
        icon: 'FaBookOpen',
        description: 'Presentación de cuentos musicales interactivos con texturas, luces y actividades sensoriales.',
        details: [
            { label: 'Valor', value: '$450.000' }
        ],
        image: '/img/servicios/canticuento.jpg'
    },
    'modal-atraccion-bebes': {
        title: 'Atracción para bebés',
        icon: 'FaPuzzlePiece',
        list: [
            '🎠 Baby Gym con pelotas',
            '🏰 Inflables',
            '🧑‍🍳 Juego de Roles',
            '🧪 Mesa sensorial',
            '💦 Parque acuático'
        ],
        footerText: 'Espacio disponible para precios y fotografías.',
        image: '/img/servicios/atraccion-bebes.jpg'
    },

    // JUVENIL
    'modal-juvenil-solo': {
        title: 'Solo animación',
        icon: 'FaMicrophoneLines',
        description: 'Incluye dinámicas, coreografías, juegos y concursos juveniles. Ideal para grupos de hasta <b>20 jóvenes</b>.',
        image: '/img/servicios/juvenil-solo.jpg'
    },
    'modal-juvenil-mediano': {
        title: 'Animación con sonido mediano',
        icon: 'FaVolumeLow',
        description: 'Incluye animación, micrófono profesional y sonido mediano. Recomendado para <b>hasta 30 jóvenes</b>.',
        image: '/img/servicios/juvenil-mediano.jpg'
    },
    'modal-juvenil-completo': {
        title: 'Animación con sonido completo',
        icon: 'FaHeadphones',
        description: 'Animación completa con luces, sonido profesional y DJ. Ideal para <b>hasta 50 jóvenes</b>.',
        image: '/img/servicios/juvenil-completo.jpg'
    },
    'modal-juvenil-deportiva': {
        title: 'Fiesta deportiva',
        icon: 'FaFutbol',
        description: 'Incluye animación con <b>rally deportivo</b> o <b>animación y partido de fútbol</b>, con premiaciones y ambiente juvenil.',
        image: '/img/servicios/juvenil-deportiva.jpg'
    },
    'modal-juvenil-acuatica': {
        title: 'Fiesta acuática',
        icon: 'FaWater',
        description: 'Perfecta para piscinas: incluye <b>rally acuático</b> o <b>animación y rally acuático</b> con seguridad y música.',
        image: '/img/servicios/juvenil-acuatica.jpg'
    },
    'modal-juvenil-reguetoneros': {
        title: 'Personajes reguetoneros',
        icon: 'FaMusic',
        description: 'Animación moderna con personajes urbanos, coreografías y ambientación reguetonera. ¡La fiesta más encendida!',
        image: '/img/servicios/reguetoneros.jpg'
    },
    'modal-juvenil-glitter': {
        title: 'Maquillaje glitter neón y tatuajes',
        icon: 'FaWandMagicSparkles',
        description: 'Incluye maquillaje artístico con glitter y tatuajes temporales neón. Perfecto para fiestas neón o temáticas.',
        image: '/img/servicios/glitter-neon.jpg'
    },

    // OTROS
    'modal-baby': {
        title: 'Baby shower y revelación',
        icon: 'FaBaby',
        description: 'Animación para adultos, sonido e iluminación, juegos personalizados.',
        image: '/img/servicios/babyshower.jpg'
    },
    'modal-pool': {
        title: 'Pool party',
        icon: 'FaWater',
        description: 'Fiesta en piscina con cañón de espuma, inflables y rallys acuáticos.',
        image: '/img/servicios/poolparty.jpg'
    },
    'modal-shows': {
        title: 'Shows temáticos y personajes',
        icon: 'FaMasksTheater',
        description: 'Shows musicales, BTL empresarial, visitas a colegios y sorpresas.',
        image: '/img/servicios/shows.jpg'
    },
    'modal-comida': {
        title: 'Estaciones de comida',
        icon: 'FaUtensils',
        description: 'Snacks dulces y salados para todos tus invitados.',
        image: '/img/servicios/comida.jpg'
    },
    'modal-atracciones': {
        title: 'Atracciones',
        icon: 'FaChair',
        description: 'Parques infantiles, juegos inflables y ferias de circo.',
        image: '/img/servicios/atracciones.jpg'
    },
    'modal-empresarial': {
        title: 'Eventos empresariales',
        icon: 'FaBriefcase',
        description: 'Animación masiva, rallys deportivos, bingos bailables y catering.',
        image: '/img/servicios/empresarial.jpg'
    },
    'modal-adicionales': {
        title: 'Servicios adicionales',
        icon: 'FaChair',
        description: 'Meseros, carpas, sillas, mesas y decoración básica.',
        image: '/img/servicios/adicionales.jpg'
    },
    'modal-halloween': {
        title: 'Fiesta de Halloween',
        icon: 'FaGhost',
        description: 'Shows, cazacalabaza, estaciones de comida y atracciones terroríficas.',
        image: '/img/servicios/halloween.jpg'
    },
    'modal-navidad': {
        title: 'Fiesta de Navidad',
        icon: 'FaSnowflake',
        description: 'Show de familia Noel, personajes, entrega de regalos y novenas musicales.',
        image: '/img/servicios/navidad.jpg'
    }
};

export const iconMap = {
    FaChild, FaBaby, FaMasksTheater, FaMusic, FaVolumeHigh,
    FaVolumeLow, FaHeadphones, FaMicrophone, FaMicrophoneLines,
    FaBookOpen, FaPuzzlePiece, FaFutbol, FaWater,
    FaWandMagicSparkles, FaGift, FaClock, FaCar,
    FaUtensils, FaBriefcase, FaChair, FaGhost, FaSnowflake
};
