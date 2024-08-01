package com.padre.dominio.dom;

import java.util.HashMap;
import java.util.Map;

import com.padre.componentes.controltipos.ControlTipos;
import com.vaadin.flow.component.Tag;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.littemplate.LitTemplate;
import com.vaadin.flow.component.template.Id;
import com.vaadin.flow.router.Route;

@Route("agregar")
@Tag("agregar-view")
@JsModule("./views/AgregarView.js")
public class AgregarView extends LitTemplate {
	private static final long serialVersionUID = 1L;

	@Id("tipo")
	private ControlTipos<Integer> tipos;

	public AgregarView() {
		Map<Integer, String> map = new HashMap<Integer, String>();
		map.put(0, "Informe de asesoria de credito");
		map.put(1, "Informe de creditos contables");

		tipos.element.setItems(map.keySet());
		tipos.element.setItemLabelGenerator(map::get);
	}
}