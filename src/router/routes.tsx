import { lazy } from 'react';
const Index = lazy(() => import('../pages/Dashboard'));
const SelectView = lazy(() => import('../pages/Seleccionar'));
const Profile = lazy(() => import('../pages/Users/Profile'));
const EditProfile = lazy(() => import('../pages/Users/AccountSetting'));
const LoginBoxed = lazy(() => import('../pages/Authentication/LoginBoxed'));
const Register = lazy(() => import('../pages/Authentication/RegisterCover'));
const Error403 = lazy(() => import('../pages/Authentication/Error403'));
const Chat = lazy(() => import('../pages/Apps/Chat'));
const Calendar = lazy(() => import('../pages/Apps/Calendar'));

const ListInvoice = lazy(() => import('../pages/Apps/Invoice/List'));
const PreviewInvoice = lazy(() => import('../pages/Apps/Invoice/Preview'));
const AddInvoice = lazy(() => import('../pages/Apps/Invoice/Add'));
const EditInvoice = lazy(() => import('../pages/Apps/Invoice/Edit'));
const CatalogoCategoria = lazy(() => import('../pages/Catalogo/Categoria/Index'));
const CatalogoCategoriaAdd = lazy(() => import('../pages/Catalogo/Categoria/Add'));
const CatalogoCategoriaEditar = lazy(() => import('../pages/Catalogo/Categoria/Edit'));
const CatalogoGrupos = lazy(() => import('../pages/Catalogo/Grupos/Index'));
const CatalogoGruposAdd = lazy(() => import('../pages/Catalogo/Grupos/Add'));
const CatalogoGruposEdit = lazy(() => import('../pages/Catalogo/Grupos/Edit'));
const CatalogoAreas = lazy(() => import('../pages/Catalogo/Areas/Index'));
const CatalogoAreasAdd = lazy(() => import('../pages/Catalogo/Areas/Add'));
const CatalogoAreasEdit = lazy(() => import('../pages/Catalogo/Areas/Edit'));
const CatalogoInstructores = lazy(() => import('../pages/Catalogo/Instructores/Index'));
const CatalogoInstructoresAdd = lazy(() => import('../pages/Catalogo/Instructores/Add'));
const CatalogoInstructoresEdit = lazy(() => import('../pages/Catalogo/Instructores/Edit'));
const CatalogoAtletas = lazy(() => import('../pages/Catalogo/Atletas/Index'));
const CatalogoAtletasAdd = lazy(() => import('../pages/Catalogo/Atletas/Add'));
const CatalogoAtletasEdit = lazy(() => import('../pages/Catalogo/Atletas/Edit'));
const CatalogoSouvenirs = lazy(() => import('../pages/Catalogo/Souvenirs/Index'));
const CatalogoSouvenirsAdd = lazy(() => import('../pages/Catalogo/Souvenirs/Add'));
const CatalogoSouvenirsEdit = lazy(() => import('../pages/Catalogo/Souvenirs/Edit'));
const CatalogoAdmin = lazy(() => import('../pages/Catalogo/Admin/Index'));
const CatalogoAdminAdd = lazy(() => import('../pages/Catalogo/Admin/Add'));
const CatalogoAdminEdit = lazy(() => import('../pages/Catalogo/Admin/Edit'));
const EntrenamientosIndex = lazy(() => import('../pages/Entrenamientos/Index'));
const EntrenamientosAtleta = lazy(() => import('../pages/Entrenamientos/Atletas'));
const EntrenamientosAtletaVer = lazy(() => import('../pages/Entrenamientos/Detalles'));
const EventosIndex = lazy(() => import('../pages/Eventos/Index'));
const PagosEventosIndex = lazy(() => import('../pages/Pagos/Eventos'));
const PagosAtletasIndex = lazy(() => import('../pages/Pagos/Atletas'));
const TiendaIndex = lazy(() => import('../pages/Tienda/Index'));
const TiendaPedido = lazy(() => import('../pages/Tienda/Pedido'));
const BuzonEncuestas = lazy(() => import('../pages/Buzon/Encuestas'));
const EncuestasIndex = lazy(() => import('../pages/Encuestas/Index'));
const BuzonMensajes = lazy(() => import('../pages/Buzon/Mensajes'));
const MensajesIndex = lazy(() => import('../pages/Mensajes/Index'));
const PagosIndex = lazy(() => import('../pages/Pagos/Index'));
const PagosTarjetas = lazy(() => import('../pages/Pagos/Tarjetas'));
const PagosReintentarPago = lazy(() => import('../pages/Pagos/Pago'));
const EntrenadorDashboard = lazy(() => import('../pages/Entrenador/Dashboard'));
const EntrenadorPerfil = lazy(() => import('../pages/Entrenador/Profile'));
const EntrenadorPerfilEditar = lazy(() => import('../pages/Entrenador/AccountSetting'));
const EntrenadorEntranamientos = lazy(() => import('../pages/Entrenador/Entrenamientos'));
const EntrenadorEntranamientosAgregar = lazy(() => import('../pages/Entrenador/EntrenamientosAgregar'));
const EntrenadorEntranamientosEditar = lazy(() => import('../pages/Entrenador/EntrenamientosEditar'));
const EntrenadorEncuestas = lazy(() => import('../pages/Entrenador/EntrenamientosEncuestas'));
const EntrenadorEncuestasAgregar = lazy(() => import('../pages/Entrenador/EntrenamientosEncuestasAgregar'));
const EntrenadorEncuestasEditar = lazy(() => import('../pages/Entrenador/EntrenamientosEncuestasEditar'));
const EntrenadorGrupos = lazy(() => import('../pages/Entrenador/Grupos/Index'));
const EntrenadorGruposAdd = lazy(() => import('../pages/Entrenador/Grupos/Add'));
const EntrenadorGruposEdit = lazy(() => import('../pages/Entrenador/Grupos/Edit'));
const EntrenadorMensajes = lazy(() => import('../pages/Entrenador/Mensajes'));

const routes = [
    {
        path: '/',
        element: <LoginBoxed />,
        layout: 'blank',
    },
    {
        path: '/entrenador/',
        element: <EntrenadorDashboard />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/perfil',
        element: <EntrenadorPerfil />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/perfil/editar',
        element: <EntrenadorPerfilEditar />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/entrenamientos',
        element: <EntrenadorEntranamientos />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/entrenamientos/agregar',
        element: <EntrenadorEntranamientosAgregar />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/entrenamientos/editar',
        element: <EntrenadorEntranamientosEditar />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/encuestas',
        element: <EntrenadorEncuestas />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/encuestas/agregar',
        element: <EntrenadorEncuestasAgregar />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/encuestas/editar',
        element: <EntrenadorEncuestasEditar />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/grupos',
        element: <EntrenadorGrupos />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/grupos/agregar',
        element: <EntrenadorGruposAdd />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/grupos/editar',
        element: <EntrenadorGruposEdit />,
        layout: 'entrenador',
    },
    {
        path: '/entrenador/mensajes',
        element: <EntrenadorMensajes />,
        layout: 'entrenador',
    },
    {
        path: '/auth/registro',
        element: <Register />,
        layout: 'blank',
    },
    {
        path: '/perfil',
        element: <Profile />,
    },
    {
        path: '/perfil/editar',
        element: <EditProfile />,
    },
    {
        path: '/dashboard',
        element: <Index />,
        layout: 'default',
    },
    {
        path: '/seleccionar',
        element: <SelectView />,
        layout: 'default',
    },
    {
        path: '/error/403',
        element: <Error403 />,
        layout: 'default',
    },
    {
        path: '/apps/chat',
        element: <Chat />,
    },
    {
        path: '/apps/calendar',
        element: <Calendar />,
    },
    {
        path: '/apps/factura/preview',
        element: <PreviewInvoice />,
    },
    {
        path: '/apps/factura/add',
        element: <AddInvoice />,
    },
    {
        path: '/apps/factura/edit',
        element: <EditInvoice />,
    },
    {
        path: '/apps/factura/list',
        element: <ListInvoice />,
    },
    {
        path: '/catalogo/categoria',
        element: <CatalogoCategoria />,
    },
    {
        path: '/catalogo/categoria/agregar',
        element: <CatalogoCategoriaAdd />,
    },
    {
        path: '/catalogo/categoria/editar',
        element: <CatalogoCategoriaEditar />,
    },
    {
        path: '/catalogo/grupos',
        element: <CatalogoGrupos />,
    },
    {
        path: '/catalogo/grupos/agregar',
        element: <CatalogoGruposAdd />,
    },
    {
        path: '/catalogo/grupos/editar',
        element: <CatalogoGruposEdit />,
    },
    {
        path: '/catalogo/areas',
        element: <CatalogoAreas />,
    },
    {
        path: '/catalogo/areas/agregar',
        element: <CatalogoAreasAdd />,
    },
    {
        path: '/catalogo/areas/editar',
        element: <CatalogoAreasEdit />,
    },
    {
        path: '/catalogo/instructores',
        element: <CatalogoInstructores />,
    },
    {
        path: '/catalogo/instructores/agregar',
        element: <CatalogoInstructoresAdd />,
    },
    {
        path: '/catalogo/instructores/editar',
        element: <CatalogoInstructoresEdit />,
    },
    {
        path: '/catalogo/atletas',
        element: <CatalogoAtletas />,
    },
    {
        path: '/catalogo/atletas/agregar',
        element: <CatalogoAtletasAdd />,
    },
    {
        path: '/catalogo/atletas/editar',
        element: <CatalogoAtletasEdit />,
    },
    {
        path: '/catalogo/souvenirs',
        element: <CatalogoSouvenirs />,
    },
    {
        path: '/catalogo/souvenirs/agregar',
        element: <CatalogoSouvenirsAdd />,
    },
    {
        path: '/catalogo/souvenirs/editar',
        element: <CatalogoSouvenirsEdit />,
    },
    {
        path: '/catalogo/administradores',
        element: <CatalogoAdmin />,
    },
    {
        path: '/catalogo/administradores/agregar',
        element: <CatalogoAdminAdd />,
    },
    {
        path: '/catalogo/administradores/editar',
        element: <CatalogoAdminEdit />,
    },
    {
        path: '/entrenamientos',
        element: <EntrenamientosAtleta />,
    },
    {
        path: '/entrenamientos/ver',
        element: <EntrenamientosAtletaVer />,
    },
    {
        path: '/entrenamientos/otros',
        element: <EntrenamientosIndex />,
    },
    {
        path: '/eventos',
        element: <EventosIndex />,
    },
    {
        path: '/pagos/atletas',
        element: <PagosAtletasIndex />,
    },
    {
        path: '/pagos/eventos',
        element: <PagosEventosIndex />,
    },
    {
        path: '/pedidos/todos',
        element: <TiendaIndex />,
    },
    {
        path: '/pedidos/agregar',
        element: <TiendaPedido />,
    },
    {
        path: '/buzon/mensajes',
        element: <BuzonMensajes />,
    },
    {
        path: '/buzon/encuestas',
        element: <BuzonEncuestas />,
    },
    {
        path: '/encuestas',
        element: <EncuestasIndex />,
    },
    {
        path: '/mensajes',
        element: <MensajesIndex />,
    },
    {
        path: '/pagos',
        element: <PagosIndex />,
    },
    {
        path: '/pagos/tarjetas',
        element: <PagosTarjetas />,
    },
    {
        path: '/pagos/pagar',
        element: <PagosReintentarPago />,
    },

];

export { routes };
