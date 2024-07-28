package com.padre.dominio.dom;

import com.padre.componentes.controltipos.ControlTipos;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

@Route("example")
public class FrmVentana extends VerticalLayout{
private static final long serialVersionUID = 1L;
	
	public FrmVentana() {
		
		add(prueba);
	}
	
	ControlTipos<Integer> prueba = new ControlTipos<Integer>();
}
