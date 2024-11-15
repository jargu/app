import { DataTable, DataTableSortStatus } from 'mantine-datatable';
import { useEffect, useState } from 'react';
import sortBy from 'lodash/sortBy';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { setPageTitle } from '../../../store/themeConfigSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import IconoMenuMarcas from '../../../components/Icon/Menu/IconoMenuMarcas';
import { useNavigate } from 'react-router-dom';
import { IRootState } from '../../../store';

const rowData2 =[
    {
        id: 1,
        name:'Lentes de sol',
        descripcion: 'Lentes de sol, color negro, con estuche',
        especificaciones:'Diseño de lentes de sol estilo urban-sport que combina lente de máscara al aire con visión panorámica y puente nasal y varillas de TR90. Una silueta ligera y cómoda que recupera la esencia de los 2000 perfecta para marcar tendencia en el día a día o en tus Après Ski. Disponible en varios colores de lentes y monturas en acabados brillo y mate.',
        precio:'$999.00',
        imagen:'',
    },
    {
        id: 2,
        name:'Gorra Forty',
        descripcion: 'Gorra Forty, Modelo: 004013664-0200',
        especificaciones:'Sé el mejor a donde quiera que vayas y complementa tu look de forma auténtica y sencilla usando la gorra Forty Seven MVP de los Dodgers de Los Ángeles. Esta gorra, cuenta con un equilibrio deportivo y moda, fue elaborada con tejido de malla ligera en la parte superior y dos paneles con perforaciones que permiten la respiración del aire. Broche ajustable a presión, visera curva modificable y logotipo bordado que destaca de forma automática.',
        precio:'$479.00',
        imagen:'',
    },
    {
        id: 3,
        name:'Chamarra Onboard',
        descripcion: 'Chamarra Onboard, Modelo: 003019616-0000',
        especificaciones:'Prepárate para el invierno con la nueva chamarra Voleth para mujer de la marca Onboard. Esta chamarra cuenta con un ajuste normal, un cierre frontal a la altura del cuello y puños elásticos. Su tejido es transpirable, suave y sumamente ligero para que puedas entrenar en todo momento y a cada hora. No dejes pasar esta increíble chamarra y cómprala ahora mismo.',
        precio: '$599.00',
        imagen:'',
    },
    {
        id: 4,
        name:'Tenis K-Swiss',
        descripcion: 'Tenis K-Swiss, Modelo: 001029411-0120',
        especificaciones:'Match Rival es un nuevo tenis para hombre de la marca K-Swiss, diseñado con un estilo urbano único y detalles aspiracionales que no querrás perderte. La parte superior cuenta con una construcción en piel con detalles en malla, en los costados puedes ver las clásicas stripes de la marca y una paleta de colores fácilmente combinables. La parte externa de la suela está construida en goma para ofrecerte la mejor tracción y comodidad al caminar.',
        precio:'$1139.40',
        imagen:'',
    },
]
const rowData = [{"id":16,"firstName":"Katy Sedgwick","email":"ksedgwick0@bing.com","dob":"21/01/2024","company":"Brightbean"},
    {"id":15,"firstName":"Ellary Hearnah","email":"ehearnah1@amazon.de","dob":"17/08/2024","company":"Agimba"},
    {"id":14,"firstName":"Clarette Leat","email":"cleat2@yale.edu","dob":"09/01/2024","company":"Leexo"},
    {"id":17,"firstName":"Claire McGillreich","email":"cmcgillreich3@acquirethisname.com","dob":"12/03/2024","company":"Pixonyx"},
    {"id":25,"firstName":"Isidor Petheridge","email":"ipetheridge4@usatoday.com","dob":"11/10/2024","company":"Bluezoom"},
    {"id":11,"firstName":"Vanni Yarham","email":"vyarham5@ft.com","dob":"21/04/2024","company":"Thoughtbridge"},
    {"id":23,"firstName":"Kaye Blaycock","email":"kblaycock6@engadget.com","dob":"03/04/2024","company":"Podcat"},
    {"id":15,"firstName":"Irvine Lukovic","email":"ilukovic7@godaddy.com","dob":"15/09/2024","company":"Browsetype"},
    {"id":19,"firstName":"Robinett Haggidon","email":"rhaggidon8@washingtonpost.com","dob":"30/11/2023","company":"Eadel"},
    {"id":19,"firstName":"Roxie Cobon","email":"rcobon9@ezinearticles.com","dob":"24/11/2023","company":"Rhyzio"},
    {"id":8,"firstName":"Aleta Vinton","email":"avintona@baidu.com","dob":"17/10/2023","company":"Babbleopia"},
    {"id":3,"firstName":"Merralee Kuzemka","email":"mkuzemkab@xing.com","dob":"24/04/2024","company":"Edgeclub"},
    {"id":19,"firstName":"Georgeanna Lestor","email":"glestorc@whitehouse.gov","dob":"31/08/2024","company":"Edgetag"},
    {"id":21,"firstName":"Marmaduke Stenett","email":"mstenettd@google.pl","dob":"18/01/2024","company":"Kazio"},
    {"id":25,"firstName":"Sonny Ruzic","email":"sruzice@cloudflare.com","dob":"26/01/2024","company":"Thoughtmix"},
    {"id":25,"firstName":"Chlo Axtonne","email":"caxtonnef@oracle.com","dob":"19/12/2023","company":"Wordware"},
    {"id":10,"firstName":"Deane Gow","email":"dgowg@drupal.org","dob":"25/03/2024","company":"Twitterbridge"},
    {"id":1,"firstName":"Maryann Hawkeridge","email":"mhawkeridgeh@webeden.co.uk","dob":"06/08/2024","company":"Snaptags"},
    {"id":2,"firstName":"Manuel Hucker","email":"mhuckeri@sciencedaily.com","dob":"11/04/2024","company":"Dabfeed"},
    {"id":13,"firstName":"Karie Seed","email":"kseedj@salon.com","dob":"12/08/2024","company":"Feedfish"},
    {"id":13,"firstName":"Gibb Masseo","email":"gmasseok@stumbleupon.com","dob":"19/12/2023","company":"Katz"},
    {"id":9,"firstName":"Willey Karadzas","email":"wkaradzasl@hao123.com","dob":"25/02/2024","company":"Innojam"},
    {"id":1,"firstName":"Goraud Kingwell","email":"gkingwellm@archive.org","dob":"04/02/2024","company":"Pixoboo"},
    {"id":13,"firstName":"Ced Renfree","email":"crenfreen@facebook.com","dob":"27/12/2023","company":"Rhyzio"},
    {"id":21,"firstName":"Vitoria Oldall","email":"voldallo@360.cn","dob":"09/05/2024","company":"Zoozzy"},
    {"id":11,"firstName":"Silvanus Hindrick","email":"shindrickp@unc.edu","dob":"13/02/2024","company":"Eire"},
    {"id":11,"firstName":"Sarita Stanmore","email":"sstanmoreq@constantcontact.com","dob":"13/10/2024","company":"Dablist"},
    {"id":24,"firstName":"Joell Bernocchi","email":"jbernocchir@netscape.com","dob":"02/11/2023","company":"Pixoboo"},
    {"id":8,"firstName":"Robbin Safhill","email":"rsafhills@baidu.com","dob":"29/12/2023","company":"Aivee"},
    {"id":14,"firstName":"Lee Aymeric","email":"laymerict@china.com.cn","dob":"08/08/2024","company":"Avaveo"},
    {"id":5,"firstName":"Abbott Stranger","email":"astrangeru@earthlink.net","dob":"08/11/2023","company":"Meevee"},
    {"id":22,"firstName":"Henrie Lomasney","email":"hlomasneyv@bloglovin.com","dob":"13/04/2024","company":"Rhynoodle"},
    {"id":3,"firstName":"Dorise Mein","email":"dmeinw@dyndns.org","dob":"27/06/2024","company":"Youspan"},
    {"id":9,"firstName":"Birch Acum","email":"bacumx@slideshare.net","dob":"29/01/2024","company":"Youspan"},
    {"id":11,"firstName":"Ramsey Gateshill","email":"rgateshilly@yahoo.co.jp","dob":"23/07/2024","company":"Plajo"},
    {"id":20,"firstName":"Jeremie Bartul","email":"jbartulz@networkadvertising.org","dob":"11/09/2024","company":"Gigazoom"},
    {"id":1,"firstName":"Milo Ferrarese","email":"mferrarese10@un.org","dob":"06/09/2024","company":"Abata"},
    {"id":2,"firstName":"Page Fullom","email":"pfullom11@dailymail.co.uk","dob":"16/11/2023","company":"Brightbean"},
    {"id":9,"firstName":"Gearard Redmire","email":"gredmire12@yahoo.co.jp","dob":"12/10/2024","company":"Jayo"},
    {"id":11,"firstName":"Philippa Mozzetti","email":"pmozzetti13@sina.com.cn","dob":"17/09/2024","company":"Flashspan"},
    {"id":17,"firstName":"Brenna Ishchenko","email":"bishchenko14@canalblog.com","dob":"09/01/2024","company":"Realmix"},
    {"id":20,"firstName":"Flynn Vidineev","email":"fvidineev15@trellian.com","dob":"19/07/2024","company":"Meeveo"},
    {"id":16,"firstName":"Koo Bernadot","email":"kbernadot16@addtoany.com","dob":"26/06/2024","company":"Vitz"},
    {"id":12,"firstName":"Margaux Seeks","email":"mseeks17@nsw.gov.au","dob":"31/03/2024","company":"Snaptags"},
    {"id":11,"firstName":"Lonni Jakubowski","email":"ljakubowski18@statcounter.com","dob":"17/02/2024","company":"Avaveo"},
    {"id":13,"firstName":"Darlene Jannings","email":"djannings19@telegraph.co.uk","dob":"15/10/2023","company":"Gigabox"},
    {"id":6,"firstName":"Graehme Denning","email":"gdenning1a@shareasale.com","dob":"24/04/2024","company":"Quaxo"},
    {"id":5,"firstName":"Edsel Breewood","email":"ebreewood1b@dion.ne.jp","dob":"30/12/2023","company":"Youspan"},
    {"id":17,"firstName":"Ruggiero Shevels","email":"rshevels1c@bbb.org","dob":"04/06/2024","company":"Eare"},
    {"id":19,"firstName":"Chick Whatson","email":"cwhatson1d@imageshack.us","dob":"16/05/2024","company":"Flashdog"},
    {"id":9,"firstName":"Kirstyn Tours","email":"ktours1e@godaddy.com","dob":"11/09/2024","company":"Jaxspan"},
    {"id":24,"firstName":"Ashlan Drysdale","email":"adrysdale1f@addtoany.com","dob":"21/07/2024","company":"Bubblemix"},
    {"id":12,"firstName":"Cicily Hargey","email":"chargey1g@scientificamerican.com","dob":"15/11/2023","company":"Mybuzz"},
    {"id":2,"firstName":"Flint Folca","email":"ffolca1h@fda.gov","dob":"14/11/2023","company":"Leexo"},
    {"id":19,"firstName":"Nichole MacGlory","email":"nmacglory1i@amazon.com","dob":"04/11/2023","company":"Meeveo"},
    {"id":11,"firstName":"Averil Tersay","email":"atersay1j@webmd.com","dob":"14/01/2024","company":"Chatterbridge"},
    {"id":13,"firstName":"Ivor Bolding","email":"ibolding1k@nba.com","dob":"13/01/2024","company":"Vinder"},
    {"id":20,"firstName":"Eadmund Bawle","email":"ebawle1l@nps.gov","dob":"12/08/2024","company":"Meemm"},
    {"id":4,"firstName":"Wilmer Taleworth","email":"wtaleworth1m@homestead.com","dob":"22/07/2024","company":"Skipstorm"},
    {"id":9,"firstName":"Fay Dominey","email":"fdominey1n@cargocollective.com","dob":"09/10/2024","company":"Blogpad"},
    {"id":11,"firstName":"Berkly Nudde","email":"bnudde1o@soundcloud.com","dob":"01/06/2024","company":"Oyoloo"},
    {"id":13,"firstName":"Alexina Stonbridge","email":"astonbridge1p@de.vu","dob":"31/08/2024","company":"Ainyx"},
    {"id":2,"firstName":"Rosaleen Joyes","email":"rjoyes1q@xing.com","dob":"19/02/2024","company":"Tazz"},
    {"id":10,"firstName":"Rochette Goodyear","email":"rgoodyear1r@nbcnews.com","dob":"29/03/2024","company":"Browsetype"},
    {"id":7,"firstName":"Kristyn Harrowsmith","email":"kharrowsmith1s@blinklist.com","dob":"24/11/2023","company":"Centizu"},
    {"id":23,"firstName":"Ashien McBain","email":"amcbain1t@wordpress.org","dob":"06/10/2024","company":"Brainsphere"},
    {"id":11,"firstName":"Brooks Antyshev","email":"bantyshev1u@shinystat.com","dob":"29/04/2024","company":"Dynabox"},
    {"id":12,"firstName":"Luther Fortnam","email":"lfortnam1v@amazonaws.com","dob":"02/11/2023","company":"Jabberstorm"},
    {"id":3,"firstName":"Bev Glaserman","email":"bglaserman1w@wp.com","dob":"08/03/2024","company":"Divape"},
    {"id":10,"firstName":"Ibbie Botwright","email":"ibotwright1x@cmu.edu","dob":"12/06/2024","company":"Topicblab"},
    {"id":12,"firstName":"Kermy Leel","email":"kleel1y@skyrock.com","dob":"15/03/2024","company":"Vitz"},
    {"id":6,"firstName":"Jacob Laslett","email":"jlaslett1z@artisteer.com","dob":"01/10/2024","company":"Fanoodle"},
    {"id":5,"firstName":"Rey Beavis","email":"rbeavis20@dmoz.org","dob":"03/07/2024","company":"Quamba"},
    {"id":20,"firstName":"Conn Amaya","email":"camaya21@dell.com","dob":"25/03/2024","company":"Wordware"},
    {"id":16,"firstName":"Devlen Laughlin","email":"dlaughlin22@nasa.gov","dob":"27/05/2024","company":"Twitterbeat"},
    {"id":22,"firstName":"Blaire Seide","email":"bseide23@bloglines.com","dob":"21/09/2024","company":"Yoveo"},
    {"id":17,"firstName":"Stacy Tomsa","email":"stomsa24@liveinternet.ru","dob":"12/03/2024","company":"Twiyo"},
    {"id":7,"firstName":"Hobie Keymer","email":"hkeymer25@sun.com","dob":"11/08/2024","company":"Skyndu"},
    {"id":18,"firstName":"Bordie Smales","email":"bsmales26@statcounter.com","dob":"09/02/2024","company":"LiveZ"},
    {"id":1,"firstName":"Carissa Lalor","email":"clalor27@cam.ac.uk","dob":"27/03/2024","company":"Edgeify"},
    {"id":15,"firstName":"Dennie Gosby","email":"dgosby28@hhs.gov","dob":"11/05/2024","company":"Skimia"},
    {"id":5,"firstName":"Jessalyn Botting","email":"jbotting29@examiner.com","dob":"30/12/2023","company":"Yakidoo"},
    {"id":6,"firstName":"Harp Crookall","email":"hcrookall2a@npr.org","dob":"27/03/2024","company":"Dabfeed"},
    {"id":7,"firstName":"Tyrus Vedikhov","email":"tvedikhov2b@comcast.net","dob":"05/04/2024","company":"Devcast"},
    {"id":13,"firstName":"Cher MacCarter","email":"cmaccarter2c@bravesites.com","dob":"17/01/2024","company":"Miboo"},
    {"id":10,"firstName":"Xaviera Sheering","email":"xsheering2d@prweb.com","dob":"24/11/2023","company":"Tagfeed"},
    {"id":9,"firstName":"Suki Duffit","email":"sduffit2e@msu.edu","dob":"29/02/2024","company":"Buzzbean"},
    {"id":8,"firstName":"Madge Hebbes","email":"mhebbes2f@ibm.com","dob":"21/11/2023","company":"Voonix"},
    {"id":21,"firstName":"Ludovico Wooff","email":"lwooff2g@dailymail.co.uk","dob":"01/07/2024","company":"Chatterbridge"},
    {"id":18,"firstName":"Jeniffer Kavanagh","email":"jkavanagh2h@squidoo.com","dob":"19/06/2024","company":"Zoomzone"},
    {"id":8,"firstName":"Gerard Dadge","email":"gdadge2i@domainmarket.com","dob":"09/06/2024","company":"Vinder"},
    {"id":15,"firstName":"Randal Vynarde","email":"rvynarde2j@dropbox.com","dob":"16/05/2024","company":"Wikivu"},
    {"id":22,"firstName":"Giorgia Petr","email":"gpetr2k@marriott.com","dob":"28/06/2024","company":"Tavu"},
    {"id":6,"firstName":"Lorilyn Ashforth","email":"lashforth2l@tumblr.com","dob":"26/04/2024","company":"Wordify"},
    {"id":25,"firstName":"Conant Quennell","email":"cquennell2m@unblog.fr","dob":"19/11/2023","company":"Mycat"},
    {"id":22,"firstName":"Chet Newbury","email":"cnewbury2n@tuttocitta.it","dob":"05/09/2024","company":"Kwimbee"},
    {"id":6,"firstName":"Dwain Dowdney","email":"ddowdney2o@un.org","dob":"10/07/2024","company":"Skivee"},
    {"id":16,"firstName":"Christie Bernardeschi","email":"cbernardeschi2p@simplemachines.org","dob":"22/03/2024","company":"Skaboo"},
    {"id":10,"firstName":"Issie Dagwell","email":"idagwell2q@flickr.com","dob":"23/09/2024","company":"Avamm"},
    {"id":9,"firstName":"Izaak Burchfield","email":"iburchfield2r@friendfeed.com","dob":"02/01/2024","company":"Fivebridge"}]

const UserIndex = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setPageTitle('Ver Administradores'));
    });
    const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === 'rtl' ? true : false;
    const [page, setPage] = useState(1);
    const PAGE_SIZES = [10, 20, 30, 50, 100];
    const [pageSize, setPageSize] = useState(PAGE_SIZES[0]);
    const [initialRecords, setInitialRecords] = useState(sortBy(rowData, 'id'));
    const [recordsData, setRecordsData] = useState(initialRecords);

    const [search, setSearch] = useState('');
    const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({ columnAccessor: 'id', direction: 'asc' });

    useEffect(() => {
        setPage(1);
    }, [pageSize]);

    useEffect(() => {
        const from = (page - 1) * pageSize;
        const to = from + pageSize;
        setRecordsData([...initialRecords.slice(from, to)]);
    }, [page, pageSize, initialRecords]);

    useEffect(() => {
        setInitialRecords(() => {
            return rowData.filter((item) => {
                return (
                    item.id.toString().includes(search.toLowerCase()) ||
                    item.firstName.toLowerCase().includes(search.toLowerCase()) ||
                    item.email.toLowerCase().includes(search.toLowerCase())
                );
            });
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    useEffect(() => {
        const data = sortBy(initialRecords, sortStatus.columnAccessor);
        setInitialRecords(sortStatus.direction === 'desc' ? data.reverse() : data);
        setPage(1);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortStatus]);
    const navigate = useNavigate();
    const actionShow = () => {
        navigate('/catalogo/administradores/editar');
    };
    const actionEdit = () => {
        navigate('/catalogo/administradores/editar');
    };

    const showAlert = async (type: number) => {
        if (type === 11) {
           const swalWithBootstrapButtons = Swal.mixin({
               customClass: {
                   confirmButton: 'btn btn-danger',
                   cancelButton: 'btn btn-warning ltr:mr-3 rtl:ml-3',
                   popup: 'sweet-alerts',
               },
               buttonsStyling: false,
           });
           swalWithBootstrapButtons
               .fire({
                    title: '¿Estas seguro de eliminar este registro?',
                    text: "¡Esta acción no puede revertise!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Borrar',
                    cancelButtonText: 'Cancelar',
                    reverseButtons: true,
                    padding: '2em',
               })
               .then((result) => {
                   if (result.value) {
                       swalWithBootstrapButtons.fire('¡Eliminado!', 'Tu registro se ha eliminado con éxito', 'success');
                   } else if (result.dismiss === Swal.DismissReason.cancel) {
                       swalWithBootstrapButtons.fire('Cancelado', 'Sin modificaciones', 'error');
                   }
               });
       }
   }
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse mb-5">
                <li>
                    <Link to="#" className="text-primary hover:underline">
                        Catálogo
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Administradores</span>
                </li>
            </ul>

            <div className='panel mt-6'>
                <div>
                    <div className="flex items-center justify-end sm:justify-between mb-5 text-danger">
                        <div className='flex'>
                            <IconoMenuMarcas /><h5 className="font-semibold text-lg dark:text-white-light ml-2"> Administradores</h5>
                        </div>
                        <div>
                            <Link to="/catalogo/administradores/agregar" className="btn btn-success ml-3 flex">
                                <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" className="w-4 h-4"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>&nbsp;{'Agregar administrador'}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex md:items-center md:flex-row flex-col mb-5 gap-5">
                    <h5 className="font-semibold text-lg dark:text-white-light">Tabla de administradores</h5>
                    <div className="ltr:ml-auto rtl:mr-auto w-1/4">
                        <input type="text" className="form-input w-full" placeholder="Buscar..." value={search} onChange={(e) => setSearch(e.target.value)} />
                    </div>
                </div>
                <div className="datatables">
                    <DataTable
                        highlightOnHover
                        className={`${isRtl ? 'whitespace-nowrap table-hover' : 'whitespace-nowrap table-hover'}`}
                        records={recordsData}
                        columns={[
                            { accessor: 'id', title: 'ID', sortable: true },
                            { accessor: 'firstName', title: 'Nombre', sortable: true },
                            { accessor: 'email', title: 'Correo', sortable: true },

                            { accessor: 'dob', title: 'Creado el', sortable: true },
                            {
                                accessor: 'action',
                                title: 'Acciones',
                                titleClassName: '!text-center',
                                render: () => (

                                    <div className="flex items-center w-max mx-auto gap-2">
                                        <Tippy content="Ver">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => actionShow()}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6"><path opacity="0.5" d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z" stroke="currentColor" stroke-width="1.5"></path><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" stroke-width="1.5"></path></svg>
                                            </button>
                                        </Tippy>
                                        <Tippy content="Editar">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => actionEdit()}>
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="#283992" stroke-width="1.5" stroke-linecap="round" />
                                                    <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="#283992" stroke-width="1.5" />
                                                </svg>
                                            </button>
                                        </Tippy>
                                        <Tippy content="Borrar">
                                            <button className="btn w-8 h-8 p-0 rounded-full" onClick={() => showAlert(11)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 24 24" fill="#EB4149" stroke="#EB4149" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-6 h-6"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                            </button>
                                        </Tippy>
                                    </div>
                                ),
                            },

                        ]}
                        totalRecords={initialRecords.length}
                        recordsPerPage={pageSize}
                        page={page}
                        onPageChange={(p) => setPage(p)}
                        recordsPerPageOptions={PAGE_SIZES}
                        onRecordsPerPageChange={setPageSize}
                        sortStatus={sortStatus}
                        onSortStatusChange={setSortStatus}
                        minHeight={200}
                        paginationText={({ from, to, totalRecords }) => `Mostrando  ${from} de ${to} de ${totalRecords} registros`}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserIndex;
