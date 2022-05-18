import { useState } from 'react';
import type { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, Button, Collapse, ListItem } from '@mui/material';
import type { ListItemProps } from '@mui/material';
import { ChevronDown as ChevronDownIcon } from '../../icons/chevron-down';
import { ChevronRight as ChevronRightIcon } from '../../icons/chevron-right';

interface DashboardSidebarItemProps extends ListItemProps {
  active?: boolean;
  children?: ReactNode;
  chip?: ReactNode;
  depth: number;
  icon?: ReactNode;
  info?: ReactNode;
  open?: boolean;
  path?: string;
  title: string;
}

export const DashboardSidebarItem: FC<DashboardSidebarItemProps> = (props) => {
  const {
    active,
    children,
    chip,
    depth,
    icon,
    info,
    open: openProp,
    path,
    title,
    ...other
  } = props;
  const [open, setOpen] = useState<boolean>(openProp);

  const handleToggle = (): void => {
    setOpen((prevOpen) => !prevOpen);
  };

  let paddingLeft = 24;

  if (depth > 0) {
    paddingLeft = 32 + 8 * depth;
  }

  // Branch
  if (children) {
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'block',
          mb: 0.5,
          py: 0,
          px: 2
        }}
        {...other}
      >
        <Button
          endIcon={
            !open
              ? <ChevronRightIcon fontSize="small" />
              : <ChevronDownIcon fontSize="small" />
          }
          disableRipple
          onClick={handleToggle}
          startIcon={icon}
          sx={{
            color: active ? 'secondary.main' : 'neutral.300',
            justifyContent: 'flex-start',
            pl: `${paddingLeft}px`,
            pr: 3,
            textAlign: 'left',
            textTransform: 'none',
            filter: 'drop-shadow(3px 3px 3px rgba(0, 0, 0, 0.5))',
            width: '100%',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255, 0.08)'
            },
            '& .MuiButton-startIcon': {
              color: active ? 'secondary.main' : 'neutral.400'
            },
            '& .MuiButton-endIcon': {
              color: 'neutral.400'
            }
          }}
        >
          <Box sx={{ flexGrow: 1 }}>
            {title}
          </Box>
          {info}
        </Button>
        <Collapse
          in={open}
          sx={{ mt: 0.5 }}
        >
          {children}
        </Collapse>
      </ListItem>
    );
  }

  // Leaf
  return (
    <ListItem
      disableGutters
      sx={{
        display: 'flex',
        mb: 2,
        py: 0,
        px: 0
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          background: active && 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(66, 141, 255, 0.31) 100%)',
          borderRadius: 0,
          '&:hover': {
            background: 'linear-gradient(180deg, rgba(104, 79, 255, 0.31) 0%, rgba(66, 141, 255, 0.31) 100%)',
            borderRadius: 0
          },
          
        }}
      >
        <NextLink
        href={path}
        passHref
      >
        <Button
          component="a"
          startIcon={icon}
          endIcon={chip}
          disableRipple
          sx={{
            
            color: active ? 'secondary.main' : 'inherit',
            fontWeight: active && 'fontWeightBold',
            justifyContent: 'start',
            pl: 0,
            pr: 0,
            textAlign: 'left',
            textTransform: 'none',
            width: '40%',
            
            
          }}
        >
          <Box 
            sx={{ 
              flexGrow: 0,
            }}
          >
            {title}
          </Box>
          {info}
        </Button>
        
      </NextLink>
      </Box>
      
    </ListItem>
  );
};

DashboardSidebarItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  depth: PropTypes.number.isRequired,
  icon: PropTypes.node,
  info: PropTypes.node,
  open: PropTypes.bool,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};

DashboardSidebarItem.defaultProps = {
  active: false,
  open: false
};
