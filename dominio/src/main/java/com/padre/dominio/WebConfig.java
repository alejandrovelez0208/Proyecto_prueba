package com.padre.dominio;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/componentes/**").addResourceLocations("classpath:/META-INF/frontend/componentes");

		registry.addResourceHandler("/frontend/**").addResourceLocations("classpath:/frontend/views");
	}

}
