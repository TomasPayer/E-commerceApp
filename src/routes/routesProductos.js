import express from "express";
import { crearProducto, obtenerProductos, obtenerProductoPorId } from "../controller/productosController";

const router = express.Router();

router.route("/").post(crearProducto).get(obtenerProductos)

router.route("/:id").get(obtenerProductoPorId)
