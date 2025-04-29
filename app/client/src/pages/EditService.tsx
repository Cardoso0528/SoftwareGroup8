import { useState, useEffect } from 'react';
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

export default function EditService() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [newService, setNewService] = useState<Service>({
    _id: '',
    name: '',
    description: '',
    cost: 0,
    duration: 0,
  });

  const {createService} = useService()
  const {updateService} = useService()
  const {deleteService} = useService()
  const {fetchService} = useService()

  const fetchServiceData = async () => {
    const serviceData = await fetchService()
    setServices(serviceData);
  }
  

  useEffect(() => {
    fetchServiceData();
    setLoading(false);
  }, [])
  

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
        duration: 0,
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
        await updateServiceInDatabase(editingService._id, newService);
        setServices(services.map(s => 
          s._id === editingService._id ? { ...s, ...newService } : s
        ));
      } else {
        // Create new service
        const { success, message, service } = await createService(newService);
        console.log("Success: ", success);
        console.log("Message: ", message); 
        if (success && service) {
          setServices([...services, service]);
        }
      }
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving service:', error);
      setError(error instanceof Error ? error.message : 'Failed to save service');
    }
  };

  const updateServiceInDatabase = async (serviceId: string, updatedServiceData: Partial<Omit<Service, "_id">>) => {
    try {
      const { success, message } = await updateService(serviceId, updatedServiceData);
      if (success) {
        console.log('Service updated successfully');
        // Optionally, you can refresh your local state here if needed
      } else {
        console.error('Failed to update service:', message);
      }
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleDeleteService = async (serviceId: string) => {
    try {
      const { success, message } = await deleteService(serviceId);
      console.log(success);
      console.log(message);
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
          { label: 'Logout', path: 'logout' }
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
