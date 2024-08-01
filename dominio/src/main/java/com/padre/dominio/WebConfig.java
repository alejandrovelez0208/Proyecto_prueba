package com.padre.dominio;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Autowired
	private ApplicationContext contexto;

	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/componentes/**").addResourceLocations("classpath:/META-INF/frontend/componentes");

		registry.addResourceHandler("/frontend/**").addResourceLocations("classpath:/frontend/views");
	}

}
