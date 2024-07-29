package com.padre.dominio.dom;

import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.H2;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.router.Route;

@Route("agregarcomponent")
@Tag("dashboard")
@JsModule("./views/Dashboard.js")
public class AgregarView extends LitTemplate {
	private static final long serialVersionUID = 1L;

	@Id("txt")
	public H2 txt;
	
//	@Id("tipo")
//	private ControlTipos<Integer> tipos;

	public AgregarView() {
//		Map<Integer, String> map = new HashMap<Integer, String>();
//		map.put(0, "Informe de asesoria de credito");
//		map.put(1, "Informe de creditos contables");
//
//		tipos.element.setItems(map.keySet());
//		tipos.element.setItemLabelGenerator(map::get);
		
		txt.setText("Hello ALEJANDRO");
	}
}