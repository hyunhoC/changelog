import { Router } from 'express';
import { body } from 'express-validator';
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from './handlers/product';
import { createUpdate, deleteUpdate, getOneUpdate, getUpdates, updateUpdate } from './handlers/update';
import { handleInputErrors } from './modules/middleware';

const router = Router();

/**
 * Product
 */
router.get('/product', getProducts);
router.get('/product/:id', getOneProduct);
router.put('/product/:id', body('name').isString(), handleInputErrors, updateProduct);
router.post('/product/', body('name').isString(), handleInputErrors, createProduct);
router.delete('/product/:id', deleteProduct);

/**
 * Update
 */
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id',
  body('title').optional(), 
  body('body').optional(), 
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional(),  
  () => {}
);
router.post('/update',
  body('title').exists(), 
  body('body').exists().isString(),
  body('productId').exists().isString(),
  () => {}
);
router.delete('/update/:id', () => {});

/**
 * Update Points
 */
router.get('/updatepoints', getUpdates);
router.get('/updatepoints/:id', getOneUpdate);
router.put('/updatepoints/:id', 
  body('name').optional().isString(), 
  body('description').optional().isString(), 
  updateUpdate
);
router.post('/updatepoints',
  body('name').isString(), 
  body('description').isString(),
  body('updatedId').exists().isString(), 
  createUpdate
);
router.delete('/updatepoints/:id', deleteUpdate);

router.use((err, req, res, next) => {
  req.json({ message: 'in router handler' });
})

export default router;