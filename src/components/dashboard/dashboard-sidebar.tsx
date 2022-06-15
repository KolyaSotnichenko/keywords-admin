import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import type { FC } from 'react';
import NextLink from 'next/link';
import Image from 'next/image'
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import type { TFunction } from 'react-i18next';
import { Box, Button, Chip, CSSObject, Divider, styled, Typography, useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material';
// import { Calendar as CalendarIcon } from '../../icons/calendar';
// import { Cash as CashIcon } from '../../icons/cash';
import { ChartBar as ChartBarIcon } from '../../icons/chart-bar';
import { ChartPie as ChartPieIcon } from '../../icons/chart-pie';
// import { ChatAlt2 as ChatAlt2Icon } from '../../icons/chat-alt2';
// import { ClipboardList as ClipboardListIcon } from '../../icons/clipboard-list';
// import { CreditCard as CreditCardIcon } from '../../icons/credit-card';
import { Home as HomeIcon } from '../../icons/home';
// import { LockClosed as LockClosedIcon } from '../../icons/lock-closed';
// import { Mail as MailIcon } from '../../icons/mail';
// import { MailOpen as MailOpenIcon } from '../../icons/mail-open';
// import { Newspaper as NewspaperIcon } from '../../icons/newspaper';
// import { OfficeBuilding as OfficeBuildingIcon } from '../../icons/office-building';
// import { ReceiptTax as ReceiptTaxIcon } from '../../icons/receipt-tax';
import { Selector as SelectorIcon } from '../../icons/selector';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import { Share as ShareIcon } from '../../icons/share';
// import { ShoppingBag as ShoppingBagIcon } from '../../icons/shopping-bag';
// import { ShoppingCart as ShoppingCartIcon } from '../../icons/shopping-cart';
import { Truck as TruckIcon } from '../../icons/truck';
// import { UserCircle as UserCircleIcon } from '../../icons/user-circle';
// import { Users as UsersIcon } from '../../icons/users';
// import { XCircle as XCircleIcon } from '../../icons/x-circle';
// import { Logo } from '../logo';
import { Scrollbar } from '../scrollbar';
import { DashboardSidebarSection } from './dashboard-sidebar-section';
import { OrganizationPopover } from './organization-popover';


import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';

import MuiDrawer from '@mui/material/Drawer';

import logo from '../../../public/logo.png'

interface DashboardSidebarProps {
  onClose: () => void;
  open: boolean;
  stateSidebar: (event: boolean) => boolean;
}

interface Item {
  title?: string;
  children?: Item[];
  chip?: ReactNode;
  icon?: ReactNode;
  path?: string;
}

interface Section {
  title: string;
  items: Item[];
}

const drawerWidth = 280;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const getSections = (t: TFunction): Section[] => [
  {
    title: '',
    items: [
      {
        title: t('Overview'),
        path: '/dashboard',
        icon: <HomeIcon fontSize="small" />,
      },
      {
        title: t('Results'),
        path: '/dashboard/results',
        icon: <ChartBarIcon fontSize="small" />
      },
      {
        title: t('Complaints'),
        path: '/dashboard/complaints',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        title: t('Settings'),
        path: '/dashboard/settings',
        icon: <TruckIcon fontSize="small" />
      },
    ]
  },
];

const getSections2 = (t: TFunction): Section[] => [
  {
    title: '',
    items: [
      {
        // title: t('Overview'),
        path: '/dashboard',
        icon: <HomeIcon fontSize="small" />,
      },
      {
        // title: t('Results'),
        path: '/dashboard/results',
        icon: <ChartBarIcon fontSize="small" />
      },
      {
        // title: t('Complaints'),
        path: '/dashboard/complaints',
        icon: <ChartPieIcon fontSize="small" />
      },
      {
        // title: t('Settings'),
        path: '/dashboard/settings',
        icon: <TruckIcon fontSize="small" />
      },
    ]
  },
];

export const DashboardSidebar: FC<DashboardSidebarProps> = (props) => {
  const { onClose, open, stateSidebar } = props;
  const router = useRouter();
  const { t } = useTranslation();
  const lgUp = useMediaQuery(
    (theme: Theme) => theme.breakpoints.up('lg'),
    {
      noSsr: true
    }
  );
  const sections = useMemo(() => getSections(t), [t]);
  const sections2 = useMemo(() => getSections2(t), [t])
  const organizationsRef = useRef<HTMLButtonElement | null>(null);
  const [openOrganizationsPopover, setOpenOrganizationsPopover] = useState<boolean>(false);

  const handlePathChange = () => {
    if (!router.isReady) {
      return;
    }

    // if (open) {
    //   onClose?.();
    // }
  };

  useEffect(
    handlePathChange,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.isReady, router.asPath]
  );

  const handleOpenOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(true);
  };

  const handleCloseOrganizationsPopover = (): void => {
    setOpenOrganizationsPopover(false);
  };

  const [isSidebarOpened, setIsSidebarOpened] = useState<boolean>(true)
  

  const handleDrawerOpen = () => {
    setIsSidebarOpened(true);
    stateSidebar(true)
  };

  const handleDrawerClose = () => {
    setIsSidebarOpened(false);
    stateSidebar(false)
  };

  const content = (
    <>
      <Scrollbar
        sx={{
          height: '100%',
          '& .simplebar-content': {
            height: '100%'
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
          }}
        >
          <div>
            {isSidebarOpened ? (
              <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                pt: 2,
                pr: 1,
                '@media screen and (max-width: 480px)':{
                  display: 'none'
                }
              }}
            >
              <Box
                onClick={handleDrawerClose}
                sx={{
                  borderRadius: '7px',
                  width: '29px',
                  height: '27px',
                  background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <Box
                  sx={{
                    pt: '2px'
                  }}
                >
                  <Box>
                   <ChevronLeftIcon />
                  </Box>
                </Box>
              </Box>
              
            </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'end',
                  pt: 2,
                  pr: 1,
                  '@media screen and (max-width: 480px)':{
                    display: 'none'
                  }
                }}
              >
                <Box
                  onClick={handleDrawerOpen}
                  sx={{
                    borderRadius: '7px',
                    width: '29px',
                    height: '27px',
                    background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}
                >
                  <Box
                    sx={{
                      pt: '2px'
                    }}
                  >
                    <Box>
                    <ChevronRightIcon />
                    </Box>
                  </Box>
                </Box>
                
              </Box>
            )}
            
            {isSidebarOpened ? (
              <Box sx={{ p: 3, textAlign: 'center' }}>
                <NextLink
                  href="/"
                  passHref
                >
                  <a>
                    <Image 
                      src={logo}
                      width={138}
                      height={119}
                      alt="Logo" 
                    />
                  </a>
                </NextLink>
              </Box>
            ) : (
              <Box sx={{ p: 1, mt: 2, textAlign: 'center' }}>
                <NextLink
                  href="/"
                  passHref
                >
                  <a>
                    <Image 
                      src={logo}
                      width={104}
                      height={91}
                      alt="Logo" 
                    />
                  </a>
                </NextLink>
              </Box>
            )}
            {isSidebarOpened && (
              <Box sx={{ px: 2 }}>
                <Box
                  onClick={handleOpenOrganizationsPopover}
                  ref={organizationsRef}
                  sx={{
                    alignItems: 'center',
                    background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(104, 79, 255, 0) 100%);',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    px: 3,
                    py: '11px',
                    borderRadius: 1,
                    textAlign: 'center'
                  }}
                >
                  <div></div>
                  <div>
                    <Typography
                      color="inherit"
                      variant="subtitle1"
                      sx={{
                        fontFamily: 'Jost'
                      }}
                    >
                      Acme Inc
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="inherit"
                        variant="body2"
                        sx={{
                          mr: '5px',
                          fontFamily: 'Jost'
                        }}
                      >
                        Your tier :
                      </Typography>
                      <Typography
                        color="secondary"
                        variant="body2"
                        sx={{
                          fontFamily: 'Jost'
                        }}
                      >
                        Premium
                      </Typography>
                    </Box>
                  </div>
                  <SelectorIcon
                    sx={{
                      color: 'inherit',
                      width: 14,
                      height: 14
                    }}
                  />
                </Box>
              </Box>
            )}
            
          </div>
          <Divider
            sx={{
              borderColor: '#2D3748', // dark divider
              mt: !isSidebarOpened ? 20 : 3,
              mb: 3,
              '@media screen and (max-width: 480px)': {
                mt: !isSidebarOpened ? 25 : 5,
                mb: 0
              }
            }}
          />
          {isSidebarOpened && (
            <Box sx={{ flexGrow: 1 }}>
              {sections.map((section) => (
                <DashboardSidebarSection
                  key={section.title}
                  path={router.asPath}
                  sx={{
                    mt: 2,
                    '& + &': {
                      mt: 2
                    }
                  }}
                  {...section}
                />
              ))}
              <Divider
                sx={{
                  borderColor: '#2D3748'  // dark divider
                }}
              />
            </Box>
          )}
          {!isSidebarOpened && (
            <Box sx={{ flexGrow: 1 }}>
              {sections2.map((section) => (
                <DashboardSidebarSection
                  key={section.title}
                  path={router.asPath}
                  sx={{
                    mt: 2,
                    '& + &': {
                      mt: 2
                    }
                  }}
                  {...section}
                />
              ))}
              <Divider
                sx={{
                  borderColor: '#2D3748',  // dark divider
                  '@media screen and (max-width: 480px)': {
                    mt: 4
                  }
                }}
              />
            </Box>
          )}
          
          {isSidebarOpened && (
            <Box sx={{ p: 2, pt: 10, pb: 5, textAlign: 'center' }}>
              <Typography
                color="neutral.100"
                variant="h6"
                sx={{
                  fontFamily: 'Jost'
                }}
              >
                {t('Need Help?')}
              </Typography>
              <Typography
                color="inherit"
                variant="body2"
                sx={{
                  fontFamily: 'Jost'
                }}
              >
                {t('Check our docs')}
              </Typography>
              <NextLink
                href="/docs/welcome"
                passHref
              >
                <Button
                  component="a"
                  fullWidth
                  sx={{ 
                    mt: 2,
                    background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)',
                    color: '#ffffff',
                    fontFamily: 'Jost',
                    fontSize: '18px'
                  }}
                  variant="contained"
                >
                  {t('Documentation')}
                </Button>
              </NextLink>
            </Box>
          )}
          {isSidebarOpened ? (
            <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 2,
              pr: 1,
              mb: '20px',
              '@media screen and (min-width: 480px)':{
                display: 'none'
              }
            }}
          >
            <Box
              onClick={handleDrawerClose}
              sx={{
                borderRadius: '7px',
                width: '24px',
                height: '22px',
                background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)',
                textAlign: 'center',
                cursor: 'pointer'
              }}
            >
              <Box
                sx={{
                  // pt: '1px'
                }}
              >
                <Box>
                 <ChevronLeftIcon />
                </Box>
              </Box>
            </Box>
            
          </Box>
          ) : (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                pt: 2,
                pr: 1,
                mb: '20px',
                '@media screen and (min-width: 480px)':{
                  display: 'none'
                }
              }}
            >
              <Box
                onClick={handleDrawerOpen}
                sx={{
                  borderRadius: '7px',
                  width: '24px',
                  height: '22px',
                  background: 'linear-gradient(90deg, #B14FFF 0%, #3C90FF 100%)',
                  textAlign: 'center',
                  cursor: 'pointer'
                }}
              >
                <Box
                  sx={{
                    // pt: '2px'
                  }}
                >
                  <Box>
                  <ChevronRightIcon />
                  </Box>
                </Box>
              </Box>
              
            </Box>
          )}
        </Box>
      </Scrollbar>
      <OrganizationPopover
        anchorEl={organizationsRef.current}
        onClose={handleCloseOrganizationsPopover}
        open={openOrganizationsPopover}
      />
    </>
  );

  if (lgUp) {
    return (
      <>
        <AppBar position='fixed' open={isSidebarOpened}>
        <Drawer
          anchor="left"
          open={isSidebarOpened}
          PaperProps={{
            sx: {
              backgroundColor: 'neutral.900',
              borderRightColor: 'divider',
              borderRightStyle: 'solid',
              borderRightWidth: (theme) => theme.palette.mode === 'dark' ? 1 : 0,
              color: '#FFFFFF',
              width: 280
            }
          }}
          variant="permanent"
        >
          {content}
        </Drawer>
        </AppBar>
      </>
    );
  }

  return (
    <>
      <Drawer
        anchor="left"
        open={isSidebarOpened}
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
        variant="permanent"
      >
        {content}
      </Drawer>
    </>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
