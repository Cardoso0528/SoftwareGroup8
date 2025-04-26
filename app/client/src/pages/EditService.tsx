import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Service } from '../types/Service';
import TopNavBar from '../components/TopNavBar';
import '../styles/EditService.css';

const defaultServices: Service[] = [
  {
    id: '1',
    name: "Women's Haircut",
    description: "Custom haircut by our expert stylists",
    price: 60,
    duration: 60
  },
  {
    id: '2',
    name: "Men's Haircut",
    description: "Custom haircut by our expert stylists",
    price: 30,
    duration: 30
  },
  {
    id: '3',
    name: "Kid's Haircut",
    description: "Custom haircut by our expert stylists",
    price: 25,
    duration: 45
  },
  {
    id: '4',
    name: "Brazilian Blowout",
    description: "Expert hair coloring and highlights",
    price: 200,
    duration: 60
  },
  {
    id: '5',
    name: "Blowout",
    description: "Expert hair coloring and highlights",
    price: 45,
    duration: 60
  },
  {
    id: '6',
    name: "Formal Style",
    description: "Expert hair coloring and highlights",
    price: 100,
    duration: 90
  },
  {
    id: '7',
    name: "Silk Press Hair Styling",
    description: "Expert hair coloring and highlights",
    price: 80,
    duration: 90
  },
  {
    id: '8',
    name: "Styling Class",
    description: "Custom haircut by our expert stylists",
    price: 100,
    duration: 60
  },
  {
    id: '9',
    name: "Balayage Hair Coloring",
    description: "Custom haircut by our expert stylists",
    price: 200,
    duration: 190
  },
  {
    id: '10',
    name: "Ombre Hair Coloring",
    description: "Custom haircut by our expert stylists",
    price: 180,
    duration: 120
  },
  {
    id: '11',
    name: "All Over Color",
    description: "Custom haircut by our expert stylists",
    price: 110,
    duration: 180
  },
  {
    id: '12',
    name: "Partial Highlights",
    description: "Custom haircut by our expert stylists",
    price: 150,
    duration: 120
  },
  {
    id: '13',
    name: "Signature Service",
    description: "Custom haircut by our expert stylists",
    price: 350,
    duration: 210
  },
  {
    id: '14',
    name: "Babylights",
    description: "Custom haircut by our expert stylists",
    price: 250,
    duration: 180
  },
  {
    id: '15',
    name: "Root Touch Up",
    description: "Custom haircut by our expert stylists",
    price: 90,
    duration: 120
  },
  {
    id: '16',
    name: "Men's Root Touch Up",
    description: "Custom haircut by our expert stylists",
    price: 70,
    duration: 70
  },
  {
    id: '17',
    name: "Custom Hair Extension",
    description: "Custom haircut by our expert stylists",
    price: 500,
    duration: 120
  },
  {
    id: '18',
    name: "Extension Maintenance",
    description: "Custom haircut by our expert stylists",
    price: 100,
    duration: 60
  },
  {
    id: '19',
    name: "Extension Removal",
    description: "Custom haircut by our expert stylists",
    price: 85,
    duration: 30
  },
  {
    id: '20',
    name: "Scalp Exfoliation",
    description: "Custom haircut by our expert stylists",
    price: 15,
    duration: 10
  },
  {
    id: '21',
    name: "Hair Gloss Treatment",
    description: "Custom haircut by our expert stylists",
    price: 70,
    duration: 45
  },
  {
    id: '22',
    name: "Hair Chalking",
    description: "Custom haircut by our expert stylists",
    price: 55,
    duration: 60
  },
  {
    id: '23',
    name: "Hair Glazing Treatment",
    description: "Custom haircut by our expert stylists",
    price: 65,
    duration: 45
  },
  {
    id: '24',
    name: "Keratin Treatment",
    description: "Custom haircut by our expert stylists",
    price: 200,
    duration: 180
  },
  {
    id: '25',
    name: "Aromatherapy Scalp Treatment",
    description: "Custom haircut by our expert stylists",
    price: 30,
    duration: 30
  }
];

export default function EditService() {
  const [services, setServices] = useState<Service[]>(defaultServices);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [newService, setNewService] = useState<Partial<Service>>({
    name: '',
    description: '',
    price: 0,
    duration: 30,
  });

  const handleOpenDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setNewService(service);
    } else {
      setEditingService(null);
      setNewService({
        name: '',
        description: '',
        price: 0,
        duration: 30,
      });
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setEditingService(null);
  };

  const handleSaveService = async () => {
    try {
      if (editingService) {
        // Update existing service
        setServices(services.map(s => 
          s.id === editingService.id ? { ...s, ...newService } : s
        ));
      } else {
        // Create new service
        const newId = (services.length + 1).toString();
        const createdService: Service = {
          id: newId,
          name: newService.name || '',
          description: newService.description || '',
          price: newService.price || 0,
          duration: newService.duration || 30,
        };
        setServices([...services, createdService]);
      }
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving service:', error);
      setError(error instanceof Error ? error.message : 'Failed to save service');
    }
  };

  const handleDeleteService = async (serviceId: string) => {
    try {
      setServices(services.filter(s => s.id !== serviceId));
    } catch (error) {
      console.error('Error deleting service:', error);
      setError(error instanceof Error ? error.message : 'Failed to delete service');
    }
  };

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <Box className="loading-container">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box className="error-container">
        <Typography color="error">{error}</Typography>
        <Button variant="contained" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      width: '100%',
      position: 'relative'
    }}>
      <TopNavBar 
        navText="Edit Services" 
        drawerOptions={[
          { label: 'Account Settings', path: '/account-settings' },
          { label: 'Edit Services', path: '/edit-services' },
          { label: 'Set Availability', path: '/set-availability' },
          { label: 'Logout', path: '/' }
        ]} 
      />
      <Box className="edit-service-container">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' },
          justifyContent: 'space-between', 
          alignItems: { xs: 'stretch', sm: 'center' },
          gap: { xs: 2, sm: 0 },
          marginBottom: '24px',
          padding: '0 16px'
        }}>
          <TextField
            fullWidth
            placeholder="Search services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-field"
            sx={{ 
              maxWidth: { xs: '100%', sm: '600px' },
              marginBottom: { xs: 2, sm: 0 }
            }}
          />
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleOpenDialog()}
            sx={{
              backgroundColor: '#db2778',
              '&:hover': {
                backgroundColor: '#be185d',
              },
              minWidth: { xs: '100%', sm: '150px' },
              height: '40px',
              whiteSpace: 'nowrap'
            }}
          >
            Add Service
          </Button>
        </Box>

        {filteredServices.length === 0 ? (
          <Box className="empty-state-container">
            <Typography variant="h6" color="textSecondary">
              No services available
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => handleOpenDialog()}
              className="empty-state-button"
            >
              Add Your First Service
            </Button>
          </Box>
        ) : (
          <Box className="service-grid">
            {filteredServices.map((service) => (
              <Box key={service.id} sx={{ height: '100%' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box className="card-actions">
                      <Typography variant="h6">{service.name}</Typography>
                      <Box>
                        <IconButton onClick={() => handleOpenDialog(service)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteService(service.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography className="service-price" gutterBottom>
                      ${service.price} - {service.duration} minutes
                    </Typography>
                    <Typography className="service-description">{service.description}</Typography>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>
        )}

        <Dialog 
          open={openDialog} 
          onClose={handleCloseDialog}
          PaperProps={{
            className: 'dialog-paper'
          }}
        >
          <DialogTitle>
            {editingService ? 'Edit Service' : 'Add New Service'}
          </DialogTitle>
          <DialogContent className="dialog-content">
            <TextField
              autoFocus
              margin="dense"
              label="Service Name"
              fullWidth
              value={newService.name}
              onChange={(e) => setNewService({ ...newService, name: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={newService.description}
              onChange={(e) => setNewService({ ...newService, description: e.target.value })}
            />
            <TextField
              margin="dense"
              label="Price"
              type="number"
              fullWidth
              value={newService.price}
              onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
            />
            <TextField
              margin="dense"
              label="Duration (minutes)"
              type="number"
              fullWidth
              value={newService.duration}
              onChange={(e) => setNewService({ ...newService, duration: Number(e.target.value) })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>Cancel</Button>
            <Button onClick={handleSaveService} variant="contained">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}