import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Service, useService } from '../types/Service';
import TopNavBar from '../components/TopNavBar';
import '../styles/EditService.css';

const defaultServices: Service[] = [
  {
    _id: '1',
    name: "Women's Haircut",
    description: "Custom haircut by our expert stylists",
    cost: 60,
    duration: 60
  },
  {
    _id: '2',
    name: "Men's Haircut",
    description: "Custom haircut by our expert stylists",
    cost: 30,
    duration: 30
  },
  {
    _id: '3',
    name: "Kid's Haircut",
    description: "Custom haircut by our expert stylists",
    cost: 25,
    duration: 45
  },
  {
    _id: '4',
    name: "Brazilian Blowout",
    description: "Expert hair coloring and highlights",
    cost: 200,
    duration: 60
  },
  {
    _id: '5',
    name: "Blowout",
    description: "Expert hair coloring and highlights",
    cost: 45,
    duration: 60
  },
  {
    _id: '6',
    name: "Formal Style",
    description: "Expert hair coloring and highlights",
    cost: 100,
    duration: 90
  },
  {
    _id: '7',
    name: "Silk Press Hair Styling",
    description: "Expert hair coloring and highlights",
    cost: 80,
    duration: 90
  },
  {
    _id: '8',
    name: "Styling Class",
    description: "Custom haircut by our expert stylists",
    cost: 100,
    duration: 60
  },
  {
    _id: '9',
    name: "Balayage Hair Coloring",
    description: "Custom haircut by our expert stylists",
    cost: 200,
    duration: 190
  },
  {
    _id: '10',
    name: "Ombre Hair Coloring",
    description: "Custom haircut by our expert stylists",
    cost: 180,
    duration: 120
  },
  {
    _id: '11',
    name: "All Over Color",
    description: "Custom haircut by our expert stylists",
    cost: 110,
    duration: 180
  },
  {
    _id: '12',
    name: "Partial Highlights",
    description: "Custom haircut by our expert stylists",
    cost: 150,
    duration: 120
  },
  {
    _id: '13',
    name: "Signature Service",
    description: "Custom haircut by our expert stylists",
    cost: 350,
    duration: 210
  },
  {
    _id: '14',
    name: "Babylights",
    description: "Custom haircut by our expert stylists",
    cost: 250,
    duration: 180
  },
  {
    _id: '15',
    name: "Root Touch Up",
    description: "Custom haircut by our expert stylists",
    cost: 90,
    duration: 120
  },
  {
    _id: '16',
    name: "Men's Root Touch Up",
    description: "Custom haircut by our expert stylists",
    cost: 70,
    duration: 70
  },
  {
    _id: '17',
    name: "Custom Hair Extension",
    description: "Custom haircut by our expert stylists",
    cost: 500,
    duration: 120
  },
  {
    _id: '18',
    name: "Extension Maintenance",
    description: "Custom haircut by our expert stylists",
    cost: 100,
    duration: 60
  },
  {
    _id: '19',
    name: "Extension Removal",
    description: "Custom haircut by our expert stylists",
    cost: 85,
    duration: 30
  },
  {
    _id: '20',
    name: "Scalp Exfoliation",
    description: "Custom haircut by our expert stylists",
    cost: 15,
    duration: 10
  },
  {
    _id: '21',
    name: "Hair Gloss Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 70,
    duration: 45
  },
  {
    _id: '22',
    name: "Hair Chalking",
    description: "Custom haircut by our expert stylists",
    cost: 55,
    duration: 60
  },
  {
    _id: '23',
    name: "Hair Glazing Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 65,
    duration: 45
  },
  {
    _id: '24',
    name: "Keratin Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 200,
    duration: 180
  },
  {
    _id: '25',
    name: "Aromatherapy Scalp Treatment",
    description: "Custom haircut by our expert stylists",
    cost: 30,
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
  const [newService, setNewService] = useState({
    _id: '',
    name: '',
    description: '',
    cost: 0,
    duration: 30,
  });

  const {createService} = useService()

  const handleOpenDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setNewService(service);
    } else {
      setEditingService(null);
      setNewService({
        _id: '',
        name: '',
        description: '',
        cost: 0,
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
          s._id === editingService._id ? { ...s, ...newService } : s
        ));
      } else {
        // Create new service
        const {success, message} = await createService(newService)
        console.log("Success: ", success);
        console.log("Message: ", message); 
        setServices([...services, newService]);
      }
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving service:', error);
      setError(error instanceof Error ? error.message : 'Failed to save service');
    }
  };

  const handleDeleteService = async (serviceId: string) => {
    try {
      setServices(services.filter(s => s._id !== serviceId));
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
              <Box key={service._id} sx={{ height: '100%' }}>
                <Card sx={{ height: '100%' }}>
                  <CardContent>
                    <Box className="card-actions">
                      <Typography variant="h6">{service.name}</Typography>
                      <Box>
                        <IconButton onClick={() => handleOpenDialog(service)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => handleDeleteService(service._id)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </Box>
                    <Typography className="service-price" gutterBottom>
                      ${service.cost} - {service.duration} minutes
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
          slotProps={{
            paper: 'dialog-paper'
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
              value={newService.cost}
              onChange={(e) => setNewService({ ...newService, cost: Number(e.target.value) })}
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