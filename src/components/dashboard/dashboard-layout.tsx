import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import PropTypes from 'prop-types';
import { CSSObject, styled, Theme } from '@mui/material/styles';
// import { DashboardNavbar } from './dashboard-navbar';
import { DashboardSidebar } from './dashboard-sidebar';
import { Box } from '@mui/material';

interface DashboardLayoutProps {
  children?: ReactNode;
}

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    // paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 280
    },
    [theme.breakpoints.up('xs')]: {
      paddingLeft: 60
    },
  })
);

export const DashboardLayout: FC<DashboardLayoutProps> = (props) => {
  const { children } = props;
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const handleChange = (newState: boolean) => {
    setIsOpen(newState)
  }

  return (
    <>
      {!isOpen ? (
        <DashboardLayoutRoot
          sx={{
            '@media screen and (min-width: 1400px)': {
              pl: !isOpen ? '80px' : ''
            }
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
              flexDirection: 'column',
              width: '100%'
            }}
          >
            {children}
          </Box>
        </DashboardLayoutRoot>
      ) : (
        <Box
          sx={{
            '@media screen and (max-width: 480px)': {
              display: 'none'
            }
          }}
        >
          <DashboardLayoutRoot
            sx={{
              '@media screen and (min-width: 1400px)': {
                pl: isOpen ? '280px' : ''
              }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                width: '100%'
              }}
            >
              {children}
            </Box>
          </DashboardLayoutRoot>
        </Box>
      )}
      
      {/* <DashboardNavbar onOpenSidebar={(): void => setIsSidebarOpen(true)} /> */}
      <DashboardSidebar
        onClose={(): void => setIsOpen(false)}
        open={isOpen}
        stateSidebar={handleChange}
      />
    </>
  );
};

DashboardLayout.propTypes = {
  children: PropTypes.node
};
