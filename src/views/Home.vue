<template>
    <div class="home">
        <full-page ref="fullpage" :options="options" id="fullpage">
            <div class="section bg-large home-section"></div>
            <div class="section">
                <div class="section-container text-center">
                    <vs-row class="md-only ">
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <h2 class="md-only mT80">NOSOTROS</h2>
                        </vs-col>
                    </vs-row>
                    <p class="mT20 md-only">
                        En GORILAS comprendemos la amplia aplicación y utilidad para las marcas de la tecnología.
                        Es por ello que ofrecemos diversas herramientas que complementarán la estrategia de tu marca
                        para encontrarse en los medios adecuados para la comunicación, prospeccion y venta que
                        requiere.
                    </p>
                    <vs-row>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <h2 class="mT80">SERVICIOS</h2>
                        </vs-col>
                    </vs-row>
                    <vs-row class="mT20">
                        <vs-col :key="index" v-for="(service, index) in services"
                                vs-justify="center"
                                vs-align="center"
                                vs-w="4"
                                vs-lg="4"
                                vs-md="12"
                                vs-xs="12">
                            <div>
                                <vs-icon :icon="service.icon" size="75px" color="#fe3f16"></vs-icon>
                            </div>
                            <div>
                                <strong>{{service.name}}</strong>
                                <p>
                                    {{service.description}}
                                </p>
                            </div>
                        </vs-col>
                    </vs-row>
                </div>
            </div>
            <div class="section">
                <div class="section-container text-center">
                    <vs-row>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <h2 class="mT80">PRODUCTOS</h2>
                        </vs-col>
                        <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="12">
                            <p>Soluciones a gran escala que ofrecemos</p>
                        </vs-col>
                    </vs-row>
                    <vs-row>
                        <vs-col v-for="(card, index) in cards"
                                :key="index"
                                vs-type="flex"
                                vs-justify="center"
                                vs-align="center"
                                vs-lg="3"
                                vs-sm="12"
                        >
                            <div class="card"
                                 @mouseover="hoverCard(index)"
                                 @mouseout="hoverCard(-1)"
                                 :ref="`card_${index}`"
                                 @click="openModal=true"
                            >
                                <img class="card-image" :class="{'selected': isSelected(index)}"
                                     :src="card.image">

                                <div class="card-footer">
                                    <p class="card-text"></p>
                                    <h3 class="card-title">{{card.title}}</h3>
                                    <p class="card-text">
                                    <span class="card-author"
                                          :class="{'selected': isSelected(index)}">{{card.author}}</span>
                                    </p>
                                </div>
                            </div>
                        </vs-col>
                    </vs-row>
                </div>
            </div>
            <div class="section">
                <div class="section-container">
                </div>
            </div>
            <div class="section">
                <div class="section-container">
                    1 section ...
                </div>
            </div>
            <div class="section">
                <div class="section-container">
                    Second section ...
                </div>
            </div>
        </full-page>

        <vs-popup :title="modalDetails.title" :active.sync="openModal">
            <vs-row>
                <vs-col vs-type="flex"
                        vs-justify="center"
                        vs-align="center"
                        vs-w="6"
                        vs-lg="6"
                        vs-md="6"
                        vs-sm="12"
                        vs-xs="12"
                >
                    <img src="http://lorempixel.com/720/1024/"/>
                </vs-col>
            </vs-row>

            <p>
               {{ modalDetails.description }}
            </p>
        </vs-popup>

    </div>
</template>

<script>

    export default {
        name: 'home',
        components: {},
        data() {
            return {
                modalDetails: {
                    title: '',
                    images:[

                    ],
                    description: '',
                },
                openModal: false,
                window: {
                    width: 0,
                    height: 0
                },
                selectedCard: -1,
                activeIndex: '1',
                options: {
                    anchors: [
                        'inicio',
                        'nosotros',
                        'productos',
                        'portafolio',
                        'tecnología',
                        'contacto',
                    ],
                    autoScrolling: true,
                    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                    sectionsColor: ['#ffffff', '#ffffff', '#f7f7f8', '#f7f7f8', '#f7f7f8'],
                },
                services: [
                    {
                        name: 'APLICACIONES MÓVILES',
                        icon: 'stay_primary_portrait',
                        description: 'Creamos plataformas adaptadas a las necesidades específicas de su marca, compenetrando estrategia de comunicación, diseño de imagen, proyección de ventas y posicionamiento de la marca en la mente del segmento objetivo'
                    },
                    {
                        name: 'SISTEMAS WEB',
                        icon: 'important_devices',
                        description: 'Diseño de plataformas tomando en cuenta navegabilidad, interactividad, usabilidad, interacción, arquitectura y buen diseño imagen y contenido relevante para generar tráfico en el sitio, venta y posicionamiento'
                    },
                    {
                        name: 'ADVERGAMING',
                        icon: 'games',
                        description: 'Estrategia publicitaria para promover un producto o servicio a través de la creativa elaboración de un videojuego. Los consumidores juegan mientras adquieren conocimiento de una marca; fomen- tando la empatía y el engagement'
                    }
                ],
                cards: [
                    {
                        title: 'Ciudad sin Baches',
                        author: 'iOS - Android - Panel Web',
                        image: require("../assets/images/services/ciudadSinBaches.jpg"),
                    },
                    {
                        title: 'Turismo de Fin',
                        author: 'iOS - Android - Panel Web',
                        image: require("../assets/images/services/turismoDeFin.jpg"),
                    },
                    {
                        title: 'Congresos',
                        author: 'iOS - Android - Panel Web',
                        image: require("../assets/images/services/congresos.jpg"),
                    },
                    {
                        title: 'Administración de Colonos',
                        author: 'Sitio / Panel Web',
                        image: require("../assets/images/services/administracionDeColonos.jpg"),
                    }
                ],
            };
        },
        created() {
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        methods: {
            hoverCard(selectedIndex) {
                this.selectedCard = selectedIndex
                this.animateCards()
            },
            animateCards() {
                this.cards.forEach((card, index) => {
                    const direction = this.calculateCardDirection(index, this.selectedCard)
                })
            },
            calculateCardDirection(cardIndex, selectedIndex) {
                if (selectedIndex === -1) {
                    return 0
                }

                const diff = cardIndex - selectedIndex
                return diff === 0 ? 0 : diff / Math.abs(diff)
            },
            isSelected(cardIndex) {
                return this.selectedCard === cardIndex
            },
            handleResize() {
                this.window.width = window.innerWidth;
                if (this.window.width < 800) {
                    this.options.autoScrolling = false;
                }
            }
        }
    }
</script>

<style>
    .home-section {
        background-repeat: no-repeat;
        background-position: right;
        background-size: cover;
        background-image: url("../assets/images/gallery-img.jpg");
    }

    .section-container {
        top: 6%;
        height: 80%;
        width: 80%;
        margin-left: 10%;
        position: relative;
        border-radius: 15px;
    }

    @media (max-width: 800px) {
        .home-section {
            background-repeat: no-repeat;
            background-position: right;
            background-size: cover;
            background-image: url("../assets/images/responsive-gallery-img.jpg");
        }

        .section-container {
            width: 95%;
            margin-left: 2.5%;
            top: 4%;
            height: 86%;
        }
    }
</style>