import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DeleteTransacao = () => {
  const { id } = useParams();

  //const [open, setOpen] = React.useState(false);
  
  const [open, setOpen] = useState(true); 

  const handleClose = () => {
    setOpen(false); // Fecha o modal
  };

  return (
    <div id="modal-delete" className='bg-purple-300'>
      <React.Fragment>
        <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"Deseja excluir essa transação?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              A transação com id: {id} vai ser excluída permanentemente.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to={'/transacoes'}>
            <Button onClick={handleClose}>
              Não
            </Button>
            </Link>
            <Button onClick={handleClose}>
              Sim
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </div>

  );
};

export default DeleteTransacao;
